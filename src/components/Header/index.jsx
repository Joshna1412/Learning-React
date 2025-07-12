import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login', { replace: true })
    }
    return (
        <div className='header-container'>
            <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="website-logo" />
            <div className='header-routes-container'>
                <Link to="/" className='header-router' >Home</Link>
                <Link to="/jobs" className='header-router'>Jobs</Link>
            </div>
            <button className='logout-button' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Header