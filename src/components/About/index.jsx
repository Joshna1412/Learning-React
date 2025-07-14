import { useContext } from 'react'
import './index.css'
import ThemeContext from '../ThemeContext'

const About = () => {
    const { isDark } = useContext(ThemeContext)
    const theme = isDark ? 'dark' : 'light'
    return (
        <div className={`about-container ${theme}`}>
            <div className='about-img-section'>
                {isDark ? <img className='about-icon' src="https://assets.ccbp.in/frontend/react-js/about-light-img.png" alt="about-icon" /> : <img className='about-icon' src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png" alt="about-icon" />}
            </div>
        </div>
    )
}

export default About