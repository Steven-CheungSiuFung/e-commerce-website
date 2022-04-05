import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { Value, Arrow, Quantity, NameAndPrice, RemoveButton, ImageContainer, CheckoutItemContainer } from "./checkout-item-card.styles";

const CheckoutItemCard = ({item}) => {
    const { imageUrl, name, quantity, price } = item;

    const { updateCartReducer } = useContext(CartDropdownContext);

    const onClickHandler = (event) => {
        const targetName = event.target.getAttribute("name");
        updateCartReducer(item, targetName);
    }

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            
            <NameAndPrice>{name}</NameAndPrice>
            <Quantity>
                <Arrow name="decrement" onClick={onClickHandler}> &#10094; </Arrow>
                <Value>{quantity}</Value>
                <Arrow name="increment" onClick={onClickHandler}> &#10095; </Arrow>
            </Quantity>
            <NameAndPrice>{quantity * price}</NameAndPrice>
            <RemoveButton name="remove" onClick={onClickHandler}> &#10005; </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItemCard;