import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({item}) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;