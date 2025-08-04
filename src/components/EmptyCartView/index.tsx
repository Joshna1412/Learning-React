import { Link } from 'react-router-dom'
import { EmptyCartContainer, EmptyCartImg, ShopNowButton } from '../styledComponents'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../context/storeContext'
// import { cartStore } from "../CartContext/CartStore"

const EmptyCartView = observer(function EmptyCartView() {
    const { cartStoreModel } = useStore()
    if (cartStoreModel.cartList.length > 0) return null

    return (
        <EmptyCartContainer>
            <EmptyCartImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                alt="cart"
            />
            <h1>Your Cart is empty</h1>
            <Link to="/products">
                <ShopNowButton>Shop Now</ShopNowButton>
            </Link>
        </EmptyCartContainer>
    )
})

export default EmptyCartView
