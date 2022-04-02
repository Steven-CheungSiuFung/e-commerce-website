import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";


import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () =>{

    const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartDropdownContext);

    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen)
    };

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

export default CartIcon;