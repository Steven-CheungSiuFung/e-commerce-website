import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addItemToCart = (addedItems, productToAdd) => {
    const isItemExists = addedItems.find(item => item.id === productToAdd.id);
    if (isItemExists) {
        return addedItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
    } else {
        return [...addedItems, {...productToAdd, quantity: 1}]
    }
}

const decrementItemQuantity = (addedItems, product) => {
    return addedItems.map(item => (item.id === product.id && product.quantity > 1) ? {...item, quantity: item.quantity - 1} : item)
}

const incrementItemQuantity = (addedItems, product) => {
    return addedItems.map(item => (item.id === product.id) ? {...item, quantity: item.quantity + 1} : item)
}

const removeItem = (addedItems, product) => {
    return addedItems.filter(item => item.id !== product.id)
}


export const CartDropdownContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    addedItems: [],
    itemsCount: 0,
    updateCartReducer: () => {},
    totalPrice: 0,
})

const INITIAL_STATE = {
    isCartOpen: false,
    addedItems: [],
    itemsCount: 0,
    totalPrice: 0,
}

const CART_ACTION_TYPE = {
    TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
    SET_ADDED_ITEMS: "SET_ADDED_ITEMS",
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN:
            return {...state, isCartOpen: payload};
        case CART_ACTION_TYPE.SET_ADDED_ITEMS:
            return {...state, ...payload};
        default:
            throw new Error(`Unhanled type ${type} in useReducer`);
    }
}

export const CartDropdownProvider = ({children}) => {
    const [CartState, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const { isCartOpen, addedItems, itemsCount, totalPrice } = CartState;

    const setIsCartOpen = () => {
        dispatch(
            createAction(CART_ACTION_TYPE.TOGGLE_CART_DROPDOWN, !isCartOpen)
        )
    };

    const setAddedItems = (newAddedItems) => {
        const newCount = newAddedItems.reduce((total, item) => total + item.quantity, 0);
        const newTotal = newAddedItems.reduce((total, item) => total + (item.quantity * item.price), 0);

        dispatch(
            createAction(
                CART_ACTION_TYPE.SET_ADDED_ITEMS, 
                {
                addedItems: newAddedItems,
                itemsCount: newCount,
                totalPrice: newTotal,
                }
            ));
    };

    
    const createNewAddedItems = (product, targetName) => {
        switch (targetName) {
            case "addItem":
                return addItemToCart(addedItems, product);
            case "decrement":
                return decrementItemQuantity(addedItems, product);
            case "increment":
                return incrementItemQuantity(addedItems, product);
            case "remove":
                return removeItem(addedItems, product);
            default:
                throw new Error(`Unhandled type ${targetName} in createNewAddedItems`);
        }
    }

    const updateCartReducer = (product, targetName) => {
        const newAddedItems = createNewAddedItems(product, targetName);
        setAddedItems(newAddedItems);
    }

    const value = {isCartOpen, setIsCartOpen, addedItems, itemsCount, updateCartReducer, totalPrice};

    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}