import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext } from 'react'
import CartContext from '../CartContext'
import {
    CartItemContainer,
    CartProductImage,
    CartItemDetailsContainer,
    CartProductTitleBrandContainer,
    CartProductTitle,
    CartProductBrand,
    CartQuantityContainer,
    QuantityControllerButton,
    CartQuantity,
    TotalPriceDeleteContainer,
    CartTotalPrice,
    DeleteButton
} from '../styledComponents'

const CartItem = props => {
    const { cartItemDetails } = props
    const { id, title, brand, quantity, price, imageUrl } = cartItemDetails
    const { addCartItem, deleteCartItem } = useContext(CartContext)

    const onIncrement = () => {
        const updatedItem = { ...cartItemDetails, quantity: 1 }
        addCartItem(updatedItem)
    }

    const onDecrement = () => {
        if (quantity > 1) {
            const updatedItem = { ...cartItemDetails, quantity: -1 }
            addCartItem(updatedItem)
        } else {
            deleteCartItem(id)
        }
    }

    const onDelete = () => {
        deleteCartItem(id)
    }

    return (
        <CartItemContainer>
            <CartProductImage src={imageUrl} alt={title} />
            <CartItemDetailsContainer>
                <CartProductTitleBrandContainer>
                    <CartProductTitle>{title}</CartProductTitle>
                    <CartProductBrand>by {brand}</CartProductBrand>
                </CartProductTitleBrandContainer>
                <CartQuantityContainer>
                    <QuantityControllerButton
                        type="button"
                        onClick={onDecrement}
                        data-testid="decrement"
                    >
                        <BsDashSquare color="#52606D" size={12} />
                    </QuantityControllerButton>
                    <CartQuantity data-testid="item-quantity">{quantity}</CartQuantity>
                    <QuantityControllerButton
                        type="button"
                        onClick={onIncrement}
                        data-testid="increment"
                    >
                        <BsPlusSquare color="#52606D" size={12} />
                    </QuantityControllerButton>
                </CartQuantityContainer>
                <TotalPriceDeleteContainer>
                    <CartTotalPrice>Rs {price * quantity}/-</CartTotalPrice>
                </TotalPriceDeleteContainer>
            </CartItemDetailsContainer>
            <DeleteButton type="button" onClick={onDelete} data-testid="remove">
                <AiFillCloseCircle color="#616E7C" size={20} />
            </DeleteButton>
        </CartItemContainer>
    )
}

export default CartItem
