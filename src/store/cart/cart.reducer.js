import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    addedItems: [],
}

export const CartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
            return {...state, isCartOpen: payload};
        case CART_ACTION_TYPES.SET_ADDED_ITEMS:
            return {...state, addedItems: payload};
        default:
            return state;
    }
}