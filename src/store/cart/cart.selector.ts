import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";
import { AddedItems } from "./cart.types";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.addedItems
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (addedItems: AddedItems) =>
    addedItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (addedItems: AddedItems) =>
    addedItems.reduce((total, item) => total + item.quantity * item.price, 0)
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);
