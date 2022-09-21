import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, EmptyMassge, CartItems } from "./cart-dropdown.styles";


const CartDropdown = () => {
    const addedItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {addedItems ? addedItems.map(item => <CartItem key={item.id} item={item} />) : <EmptyMassge>Your cart is empty</EmptyMassge>}
            </CartItems>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>CHECKOUT</Button>   
        </CartDropdownContainer>
    )
}

export default CartDropdown;