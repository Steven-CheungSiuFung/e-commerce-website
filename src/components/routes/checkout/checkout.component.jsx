import { useContext } from "react";
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";

import CheckoutItemCard from "../../checkout-item-card/checkout-item-card.component";
import "./checkout.styles.jsx";
import { CheckoutContainer, CheckoutHeadr, HeaderBlock, TotalPrice } from "./checkout.styles.jsx";

const Checkout = () => {
    const { addedItems, totalPrice } = useContext(CartDropdownContext);

    return (
        <CheckoutContainer>
            <CheckoutHeadr>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeadr>
                 
            {addedItems.map(item => <CheckoutItemCard key={item.id} item={item} /> )}
            
            <TotalPrice>
                <span>Total: ${totalPrice}</span>
            </TotalPrice>
        </CheckoutContainer>
    )
}

export default Checkout;