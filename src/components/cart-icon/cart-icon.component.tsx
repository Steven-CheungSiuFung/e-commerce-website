import { useSelector, useDispatch } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () =>{
    const isCartOpen = useSelector(selectIsCartOpen);
    const itemsCount = useSelector(selectCartCount);

    const dispatch = useDispatch();

    const toggleDropdown = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    };

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount>{itemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;