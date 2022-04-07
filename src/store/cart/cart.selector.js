import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => 
        cartSlice.addedItems
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (addedItems) => 
        addedItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (addedItems) => 
        addedItems.reduce((total, item) => total + (item.quantity * item.price), 0)
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => 
        cartSlice.isCartOpen
);