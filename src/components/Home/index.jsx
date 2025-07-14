import ThemeContext from '../ThemeContext'
import { useContext } from 'react'
import './index.css'

const Home = () => {
    const { isDark } = useContext(ThemeContext)

    const theme = !isDark ? 'light' : 'dark'
    return (
        <div className={`home-container ${theme}`}>
            <div className='home-img-section'>
                {isDark ? <img className='home-icon' src="https://assets.ccbp.in/frontend/react-js/home-light-img.png" alt="home-icon" /> : <img className='home-icon' src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png" alt="home-icon" />}
            </div>
        </div>
    )
}

export default Home