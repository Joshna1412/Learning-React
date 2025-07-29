import { useContext } from "react"
import Header from "../Header"
import ThemeContext from "../ThemeContext"
import DashBoard from "../DashBoard"
import { Container, NotFoundContainer, NotFoundImg, NotFoundSection } from "../styled-components"

const NotFound = () => {
    const { isDark } = useContext(ThemeContext)
    return (
        <Container>
            <Header />
            <NotFoundSection>
                <DashBoard />
                <NotFoundContainer $isdark={isDark}>
                    {isDark ?
                        <NotFoundImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png" alt="not-found" />
                        : <NotFoundImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" alt="not-found" />}
                    <h1 style={{ margin: '5px' }}>Page Not Found</h1>
                </NotFoundContainer>
            </NotFoundSection>
        </Container>
    )
}

export default NotFound