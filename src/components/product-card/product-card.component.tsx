import { FC, MouseEvent } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateCartReducer } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { CategoryItem } from "../../store/categories/categories.types";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;

  const addedItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addToCart = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const targetName = (event.target as HTMLButtonElement).name;
    dispatch(updateCartReducer(addedItems, product, targetName));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        name="addItem"
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
