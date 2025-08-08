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
} from '../StyledComponents'

import { useStore } from '../../context/storeContext'

interface CartItemProps {
    cartItemDetails: {
        id: string
        title: string
        brand: string
        quantity: number
        price: number
        imageUrl: string
    }
}

const CartItem: React.FC<CartItemProps> = observer(({ cartItemDetails }) => {
    const { cartStoreModel } = useStore()
    const { id, title, brand, quantity, price, imageUrl } = cartItemDetails

    const handleIncrement = () => {
        cartStoreModel.updateQuantity(id, 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            cartStoreModel.updateQuantity(id, -1)
        } else {
            cartStoreModel.deleteCartItem(id)
        }
    }

    const handleDelete = () => {
        cartStoreModel.deleteCartItem(id)
    }

    const totalPrice = price * quantity

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
                        onClick={handleDecrement}
                        data-testid="decrement"
                        aria-label="decrease quantity"
                    >
                        <BsDashSquare color="#52606D" size={12} />
                    </QuantityControllerButton>

                    <CartQuantity data-testid="item-quantity">
                        {quantity}
                    </CartQuantity>

                    <QuantityControllerButton
                        type="button"
                        onClick={handleIncrement}
                        data-testid="increment"
                        aria-label="increase quantity"
                    >
                        <BsPlusSquare color="#52606D" size={12} />
                    </QuantityControllerButton>
                </CartQuantityContainer>

                <TotalPriceDeleteContainer>
                    <CartTotalPrice>Rs {totalPrice}/-</CartTotalPrice>
                </TotalPriceDeleteContainer>
            </CartItemDetailsContainer>

            <DeleteButton
                type="button"
                onClick={handleDelete}
                data-testid="remove"
                aria-label="remove item"
            >
                <AiFillCloseCircle color="#616E7C" size={20} />
            </DeleteButton>
        </CartItemContainer>
    )
})

export default CartItem
