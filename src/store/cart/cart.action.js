import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

const createNewAddedItems = (addedItems, product, targetName) => {
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

const setAddedItems = (newAddedItems) => {
    return createAction(CART_ACTION_TYPES.SET_ADDED_ITEMS, newAddedItems);
}


export const updateCartReducer = (addedItems, product, targetName) => {
    const newAddedItems = createNewAddedItems(addedItems, product, targetName);
    return setAddedItems(newAddedItems);
}

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN, boolean);
}