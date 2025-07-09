import { Link } from "react-router-dom"
import './index.css'

const EmptyCartView = () => {
    return (
        <div className="empty-cart-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                alt="cart"
                className="empty-cart-img"
            />
            <h1>Your Cart is empty</h1>
            <Link to='/products'>
                <button>Shop Now</button>
            </Link>
        </div>
    )
}
export default EmptyCartView