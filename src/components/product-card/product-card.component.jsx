import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

    const { addNewItem } = useContext(CartDropdownContext);

    const addToCart = () => {
        addNewItem(product)
    }
    
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;