import React from 'react'
import { observer } from 'mobx-react'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
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
    DeleteButton,
} from '../styledComponents'
import { useStore } from '../../context/storeContext'

interface CartDetails {
    id: string
    title: string
    brand: string
    quantity: number
    price: number
    imageUrl: string
}

interface CartItemProps {
    cartItemDetails: CartDetails
}

const CartItem: React.FC<CartItemProps> = ({ cartItemDetails }) => {
    const { cartStoreModel } = useStore()
    const { id, title, brand, quantity, price, imageUrl } = cartItemDetails

    const onIncrement = () => {
        cartStoreModel.updateQuantity(id, 1)
    }

    const onDecrement = () => {
        cartStoreModel.updateQuantity(id, -1)
    }

    const onDelete = () => {
        cartStoreModel.deleteCartItem(id)
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
