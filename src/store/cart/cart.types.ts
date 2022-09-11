import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  TOGGLE_CART_DROPDOWN = "cart/TOGGLE_CART_DROPDOWN",
  SET_ADDED_ITEMS = "cart/SET_ADDED_ITEMS",
}

export type Product = CategoryItem;

export type CartItem = CategoryItem & {
  quantity: number;
};

export type AddedItems = CartItem[];
