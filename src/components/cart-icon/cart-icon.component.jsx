import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () =>{

    const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartDropdownContext);

    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen)
    };

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount>{itemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;