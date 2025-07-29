import React, { useContext } from "react"
import ThemeContext from "../ThemeContext"
import { GamingIcon, HamburgerCloseButton, HamburgerListItems, HamburgerMenuHomeIcon, HamburgerPopupItem, HamburgerPopupWrapper, HomeIcon, ListItem, ListItems, SavedVideosIcon, TrendingIcon } from "../styled-components"
import { Link } from "react-router-dom"

const PopupHamburger = ({ close }) => {
    const { isDark, activeItem, setActiveItem } = useContext(ThemeContext)

    return (
        <HamburgerPopupWrapper $isdark={isDark}>
            <HamburgerCloseButton onClick={close}>Close</HamburgerCloseButton>
            <HamburgerListItems>
                <Link to="/">
                    <HamburgerPopupItem $isActive={activeItem === "home"} $isdark={isDark} onClick={() => { setActiveItem('home') }}>
                        <HomeIcon $isActive={activeItem === "home"} />
                        <span style={{ paddingTop: '5px', paddingLeft: '20px' }}>Home</span>
                    </HamburgerPopupItem>
                </Link>

                <Link to="/trending">
                    <HamburgerPopupItem $isActive={activeItem === "trending"} $isdark={isDark} onClick={() => { setActiveItem('trending') }}>
                        <TrendingIcon $isActive={activeItem === "trending"} />
                        <span style={{ paddingTop: '5px', paddingLeft: '17px' }}>Trending</span>
                    </HamburgerPopupItem>
                </Link>

                <Link to="/gaming">
                    <HamburgerPopupItem $isActive={activeItem === "gaming"} $isdark={isDark} onClick={() => { setActiveItem('gaming') }}>
                        <GamingIcon $isActive={activeItem === "gaming"} />
                        <span style={{ paddingTop: '5px', paddingLeft: '17px' }}>Gaming</span>
                    </HamburgerPopupItem>
                </Link>

                <Link to="/saved-videos">
                    <HamburgerPopupItem $isActive={activeItem === "saved-videos"} $isdark={isDark} onClick={() => { setActiveItem('saved-videos') }}>
                        <SavedVideosIcon $isActive={activeItem === "saved-videos"} />
                        <span style={{ paddingTop: '5px', paddingLeft: '20px' }}>Saved Videos</span>
                    </HamburgerPopupItem>
                </Link>
            </HamburgerListItems>
        </HamburgerPopupWrapper>
    )
}

export default PopupHamburger
