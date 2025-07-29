import { useContext } from "react"
import { Link } from "react-router-dom"
import ThemeContext from "../ThemeContext"
import {
    ContactImage, ContactSection, ContactUsLinks, DashBoardSection,
    GamingIcon, HomeIcon, ListItem, ListItems, SavedVideosIcon, TrendingIcon,
} from '../styled-components'

const DashBoard = () => {
    const { isDark, activeItem, setActiveItem } = useContext(ThemeContext)

    return (
        <DashBoardSection $isdark={isDark}>
            <ListItems>
                <Link to="/">
                    <ListItem $isActive={activeItem === "home"} $isdark={isDark} onClick={() => setActiveItem('home')}>
                        <HomeIcon $isActive={activeItem === "home"} />
                        <span>Home</span>
                    </ListItem>
                </Link>

                <Link to="/trending">
                    <ListItem $isActive={activeItem === "trending"} $isdark={isDark} onClick={() => setActiveItem('trending')}>
                        <TrendingIcon $isActive={activeItem === "trending"} />
                        <span>Trending</span>
                    </ListItem>
                </Link>

                <Link to="/gaming">
                    <ListItem $isActive={activeItem === "gaming"} $isdark={isDark} onClick={() => setActiveItem('gaming')}>
                        <GamingIcon $isActive={activeItem === "gaming"} />
                        <span>Gaming</span>
                    </ListItem>
                </Link>

                <Link to="/saved-videos">
                    <ListItem $isActive={activeItem === "saved-videos"} $isdark={isDark} onClick={() => setActiveItem('saved-videos')}>
                        <SavedVideosIcon $isActive={activeItem === "saved-videos"} />
                        <span>Saved Videos</span>
                    </ListItem>
                </Link>
            </ListItems>

            <ContactSection>
                <h3>CONTACT US</h3>
                <ContactUsLinks>
                    <ContactImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="facebook-icon" />
                    <ContactImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitter-icon" />
                    <ContactImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="linkedin-icon" />
                </ContactUsLinks>
                <p style={{ fontWeight: '600' }}>Enjoy! Now to see your channels and recommendations!</p>
            </ContactSection>
        </DashBoardSection>
    )
}

export default DashBoard
