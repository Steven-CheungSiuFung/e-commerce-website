import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles";

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    const { addNewItem } = useContext(CartDropdownContext);

    const addToCart = () => {
        addNewItem(product)
    }
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;