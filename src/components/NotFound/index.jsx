import { useContext } from 'react'
import './index.css'
import ThemeContext from '../ThemeContext'

const NotFound = () => {
    const { isDark } = useContext(ThemeContext)
    const theme = isDark ? 'dark' : 'light'
    return (
        <div className={`not-found-img-container ${theme}`}>
            <img className='not-found-img' src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" alt="not-found" />
            <h1 className={`${theme}`}>Not Found Page</h1>
        </div>
    )
}

export default NotFound