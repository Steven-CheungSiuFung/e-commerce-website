import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import "./checkout-item-card.styles.scss";

const CheckoutItemCard = ({item}) => {
    const { imageUrl, name, quantity, price } = item;

    const { updateQuantity } = useContext(CartDropdownContext);

    const onClickHandler = (event) => {
        const tagName = event.target.getAttribute("name");
        updateQuantity(item, tagName);
    }

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" name="decrement" onClick={onClickHandler}> &#10094; </span>
                <span className="value">{quantity}</span>
                <span className="arrow" name="increment" onClick={onClickHandler}> &#10095; </span>
            </div>
            <span className="price">{quantity * price}</span>
            <span className="remove-button" name="remove" onClick={onClickHandler}> &#10005; </span>
            
        </div>
    )
}

export default CheckoutItemCard;