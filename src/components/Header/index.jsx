import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { use } from 'react'
import Cookies from 'js-cookie'
import CartContext from "../CartContext";

function Header() {
    const navigate = useNavigate()
    const value = use(CartContext);
    const { cartList } = value;
    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }
    const renderCartItemsCount = () => {
        const cartListCount = cartList.length;
        return (
            <>
                {cartListCount > 0 ? (
                    <span className="cart-count-badge">{cartListCount}</span>
                ) : null}
            </>
        );
    };
    return (
        <div className='header-container'>
            <img className='website-logo-image' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website-logo" />
            <div className='header-items'>
                <ul className='nav-link-items'>
                    <li className='nav-link'>
                        <Link to="/" className='item'>Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to="/products" className='item'>Products</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to="/cart" className='item'>Cart {renderCartItemsCount()}</Link>
                    </li>
                </ul>
                <button className='logout-button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header