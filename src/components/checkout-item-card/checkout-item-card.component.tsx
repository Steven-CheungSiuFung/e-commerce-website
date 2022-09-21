import { FC, MouseEvent } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updateCartReducer } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CartItem } from "../../store/cart/cart.types";

import {
  Value,
  Arrow,
  Quantity,
  NameAndPrice,
  RemoveButton,
  ImageContainer,
  CheckoutItemContainer,
} from "./checkout-item-card.styles";

type CheckoutItemCardProps = {
  item: CartItem;
};

const CheckoutItemCard: FC<CheckoutItemCardProps> = ({ item }) => {
  const addedItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { imageUrl, name, quantity, price } = item;

  const onClickHandler = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    const targetName = (event.target as Element).getAttribute("name");
    if (!targetName) return;
    dispatch(updateCartReducer(addedItems, item, targetName));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <NameAndPrice>{name}</NameAndPrice>
      <Quantity>
        <Arrow name="decrement" onClick={onClickHandler}>
          {" "}
          &#10094;{" "}
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow name="increment" onClick={onClickHandler}>
          {" "}
          &#10095;{" "}
        </Arrow>
      </Quantity>
      <NameAndPrice>{quantity * price}</NameAndPrice>
      <RemoveButton name="remove" onClick={onClickHandler}>
        {" "}
        &#10005;{" "}
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItemCard;
