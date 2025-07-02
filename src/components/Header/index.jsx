import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'

function Header() {
    const navigate = useNavigate()
    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }
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
                        <Link to="/cart" className='item'>Cart</Link>
                    </li>
                </ul>
                <button className='logout-button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header