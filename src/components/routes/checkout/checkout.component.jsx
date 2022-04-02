import { useContext } from "react";
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";

import CheckoutItemCard from "../../checkout-item-card/checkout-item-card.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const { addedItems, totalPrice } = useContext(CartDropdownContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Product</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
                 
            {addedItems.map(item => <CheckoutItemCard key={item.id} item={item} /> )}
            
            <div className="total">
                <span>Total: ${totalPrice}</span>
            </div>
        </div>
    )
}

export default Checkout;