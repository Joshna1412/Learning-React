import React from 'react'
import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// import { cartStore } from '../CartContext/CartStore'
import {
    HeaderItems,
    LinkItem,
    LinkItemsContainer,
    LogoutButton,
    WebsiteLogoImg,
    HeaderContainer,
    CardCount,
    LinkStyle,
} from '../styledComponents'
import { useStore } from '../../context/storeContext'

const Header: React.FC = observer(() => {
    const { cartStoreModel } = useStore()
    const navigate = useNavigate()

    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }

    const renderCartItemsCount = () => {
        const count = cartStoreModel.totalItems
        return count > 0 ? <CardCount>{count}</CardCount> : null
    }

    return (
        <HeaderContainer>
            <WebsiteLogoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website-logo"
            />
            <HeaderItems>
                <LinkItemsContainer>
                    <LinkItem>
                        <LinkStyle to="/">Home</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/products">Products</LinkStyle>
                    </LinkItem>
                    <LinkItem>
                        <LinkStyle to="/cart">
                            Cart {renderCartItemsCount()}
                        </LinkStyle>
                    </LinkItem>
                </LinkItemsContainer>
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
            </HeaderItems>
        </HeaderContainer>
    )
})

export default Header
