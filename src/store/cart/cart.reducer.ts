import { AnyAction } from "redux";
import { setAddedItems, setIsCartOpen } from "./cart.action";
import { AddedItems } from "./cart.types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly addedItems: AddedItems;
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  addedItems: [],
};

export const CartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  if (setAddedItems.match(action)) {
    return { ...state, addedItems: action.payload };
  }

  return state;
  //   switch (action.type) {
  //     case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
  //       return { ...state, isCartOpen: action.payload };
  //     case CART_ACTION_TYPES.SET_ADDED_ITEMS:
  //       return { ...state, addedItems: action.payload };
  //     default:
  //       return state;
  //   }
};
