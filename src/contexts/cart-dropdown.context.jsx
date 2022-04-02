import { createContext } from "react";
import { useState, useEffect } from "react";

const addItemToCart = (addedItems, productToAdd) => {
    const isItemExists = addedItems.find(item => item.id === productToAdd.id);
    if (isItemExists) {
        return addedItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
    } else {
        return [...addedItems, {...productToAdd, quantity: 1}]
    }
}

const reduceItemQuantity = (addedItems, product) => {
    return addedItems.map(item => (item.id === product.id && product.quantity > 1) ? {...item, quantity: item.quantity - 1} : item)
}

const increaseItemQuantity = (addedItems, product) => {
    return addedItems.map(item => (item.id === product.id) ? {...item, quantity: item.quantity + 1} : item)
}

const removeItem = (addedItems, product) => {
    return addedItems.filter(item => item.id !== product.id)
}

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    addedItems: [],
    addNewItem: () => {},
    itemsCount: 0,
    updateQuantity: () => {},
    totalPrice: 0,
})

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [addedItems, setAddedItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCount = addedItems.reduce((total, item) => total + item.quantity, 0);
        setItemsCount(newCount);
    }, [addedItems]);

    useEffect(() => {
        const newtotal = addedItems.reduce((total, item) => total + (item.quantity * item.price), 0);
        setTotalPrice(newtotal);
    }, [addedItems]);

    const addNewItem = (productToAdd) => {
        setAddedItems(addItemToCart(addedItems, productToAdd));
    }

    const updateQuantity = (product, type) => {
        if (type === "decrement") {
            setAddedItems(reduceItemQuantity(addedItems, product));
        } else if (type === "increment") {
            setAddedItems(increaseItemQuantity(addedItems, product));
        } else if (type === "remove") {
            setAddedItems(removeItem(addedItems, product));
        }
    }

    const value = {isCartOpen, setIsCartOpen, addedItems, addNewItem, itemsCount, updateQuantity, totalPrice};

    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}