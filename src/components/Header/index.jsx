import {
    HeaderDashboardSection,
    HeaderRightItems,
    HeaderSection,
    LogoutButton,
    MoonImage,
    SunImage,
    UserProfile,
    WebsiteLogo,
    LogoutIconButton,
    HamburgerIcon
} from "../styled-components"
import React, { useContext } from 'react'
import ThemeContext from "../ThemeContext"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"
import Popup from 'reactjs-popup'
import PopupCard from "../PopupCard"
import { FiLogOut, FiMenu } from "react-icons/fi" // Add FiMenu icon
import PopupHamburger from "../PopupHamburger"

const Header = () => {
    const { isDark, changeTheme } = useContext(ThemeContext)
    const navigate = useNavigate()

    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }

    return (
        <HeaderDashboardSection $isdark={isDark}>
            <HeaderSection>
                <Link to="/">
                    <WebsiteLogo
                        src={
                            isDark
                                ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                                : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        }
                        alt="website logo"
                    />
                </Link>

                <HeaderRightItems>
                    {!isDark ? <MoonImage onClick={changeTheme} /> : <SunImage onClick={changeTheme} />}
                    <div>
                        <UserProfile
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                            alt="userprofile"
                        />
                        <Popup
                            modal
                            overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
                            trigger={
                                <HamburgerIcon>
                                    <FiMenu size={28} />
                                </HamburgerIcon>
                            }
                        >
                            {close => <PopupHamburger close={close} />}
                        </Popup>
                    </div>
                    <Popup modal trigger={
                        <div style={{ all: 'unset', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <LogoutButton>Logout</LogoutButton>
                            <LogoutIconButton $isdark={isDark}>
                                <FiLogOut />
                            </LogoutIconButton>
                        </div>
                    }>
                        {close => (
                            <PopupCard
                                close={close}
                                onConfirm={() => {
                                    close()
                                    onLogout()
                                }}
                            />
                        )}
                    </Popup>
                </HeaderRightItems>
            </HeaderSection>
        </HeaderDashboardSection>
    )
}

export default Header
