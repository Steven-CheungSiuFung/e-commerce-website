import { createContext } from "react";
import { useState, useEffect } from "react";

const updateAddedItems = (addedItems, productToAdd) => {
    const isItemExists = addedItems.find(item => item.id === productToAdd.id);
    if (isItemExists) {
        return addedItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
    } else {
        return [...addedItems, {...productToAdd, quantity: 1}]
    }
}

export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    addedItems: [],
    addNewItem: () => {},
    itemsCount: 0,
})

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [addedItems, setAddedItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        const newCount = addedItems.reduce((total, item) => total + item.quantity, 0);
        setItemsCount(newCount);
    }, [addedItems]);

    const addNewItem = (productToAdd) => {
        setAddedItems(updateAddedItems(addedItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addedItems, addNewItem, itemsCount};

    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}