import { Link } from 'react-router-dom'
import { EmptyCartContainer, EmptyCartImg, ShopNowButton } from '../styledComponents'
import React from 'react'

const EmptyCartView: React.FC = () => {
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
}

export default EmptyCartView
