import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotalPrice,
} from "../../../store/cart/cart.selector";

import CheckoutItemCard from "../../checkout-item-card/checkout-item-card.component";
import PaymentForm from "../../payment-form/payment-form.component";

import "./checkout.styles";
import {
  CheckoutContainer,
  CheckoutHeadr,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles";

const Checkout = () => {
  const addedItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

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

      {addedItems.map((item) => (
        <CheckoutItemCard key={item.id} item={item} />
      ))}

      <TotalPrice>
        <span>Total: ${totalPrice}</span>
      </TotalPrice>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
