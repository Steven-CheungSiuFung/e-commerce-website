import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const {addedItems} = useContext(CartDropdownContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {addedItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;