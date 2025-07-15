import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { use } from 'react'
import Cookies from 'js-cookie'
import CartContext from "../CartContext";
import { HeaderItems, LinkItem, LinkItemsContainer, LogoutButton, WebsiteLogoImg, HeaderContainer, CardCount, LinkStyle } from '../styledComponents'

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
                    <CardCount>{cartListCount}</CardCount>
                ) : null}
            </>
        );
    };
    return (
        <HeaderContainer>
            <WebsiteLogoImg src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website-logo" />
            <HeaderItems>
                <LinkItemsContainer>
                    <LinkItem>
                        <LinkStyle to="/">Home</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/products">Products</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/cart">Cart {renderCartItemsCount()}</LinkStyle>
                    </LinkItem>
                </LinkItemsContainer>
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
            </HeaderItems>
        </HeaderContainer>
    )
}

export default Header