import { Link } from 'react-router-dom'
import { EmptyCartContainer, EmptyCartImg, ShopNowButton } from '../styledComponents'

const EmptyCartView = () => {
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
