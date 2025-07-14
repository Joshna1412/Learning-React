import { Link } from 'react-router-dom'
import './index.css'
import ThemeContext from '../ThemeContext'
import { useContext } from 'react'

const Header = () => {
    const { isDark, themeChange } = useContext(ThemeContext)

    const theme = !isDark ? 'light' : 'dark'

    return (
        <nav className={`navbar ${theme}`}>
            {isDark ? <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png" /> : <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png" />}
            <div className='home-about-container'>
                <Link to="/" ><h3 className={`nav-home ${theme}`}>Home</h3></Link>
                <Link to="/about"><h3 className={`nav-about ${theme}`}>About</h3></Link>
            </div>
            {isDark ? <img className='theme-img' src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png" alt="theme-img" onClick={themeChange} /> : <img className='theme-img' src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png" alt="theme-img" onClick={themeChange} />}
        </nav>
    )
}

export default Header