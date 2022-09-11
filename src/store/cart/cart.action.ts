import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, AddedItems, CartItem, Product } from "./cart.types";

type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
  boolean
>;

type UpdateCartReducer = ActionWithPayload<
  CART_ACTION_TYPES.SET_ADDED_ITEMS,
  AddedItems
>;

const addItemToCart = (addedItems: AddedItems, productToAdd: Product) => {
  const isItemExists = addedItems.find((item) => item.id === productToAdd.id);
  if (isItemExists) {
    return addedItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...addedItems, { ...productToAdd, quantity: 1 }];
  }
};

const decrementItemQuantity = (addedItems: AddedItems, product: CartItem) => {
  return addedItems.map((item) =>
    item.id === product.id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const incrementItemQuantity = (addedItems: AddedItems, product: CartItem) => {
  return addedItems.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const removeItem = (addedItems: AddedItems, product: CartItem) => {
  return addedItems.filter((item) => item.id !== product.id);
};

const updateAddedItems = (
  addedItems: AddedItems,
  product: CartItem,
  targetName: string
) => {
  switch (targetName) {
    case "decrement":
      return decrementItemQuantity(addedItems, product);
    case "increment":
      return incrementItemQuantity(addedItems, product);
    case "remove":
      return removeItem(addedItems, product);
    default:
      throw new Error(`Unhandled type ${targetName} in createNewAddedItems`);
  }
};

export const setAddedItems = withMatcher((newAddedItems: AddedItems) => {
  return createAction(CART_ACTION_TYPES.SET_ADDED_ITEMS, newAddedItems);
});

function isProductExist(product: Product | CartItem): product is CartItem {
  return (product as CartItem).quantity >= 1;
}

export const updateCartReducer = (
  addedItems: AddedItems,
  product: Product | CartItem,
  targetName: string
): UpdateCartReducer => {
  const newAddedItems = isProductExist(product)
    ? updateAddedItems(addedItems, product, targetName)
    : addItemToCart(addedItems, product);
  return setAddedItems(newAddedItems);
};

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN, boolean);
});
