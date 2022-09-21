import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

type CartItemProps = {
  item: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
