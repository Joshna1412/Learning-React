import './index.css'
import ContentContext from '../ContentContext'
import { useContext } from 'react'

const LeftNavbar = () => {
    const { activeTabs } = useContext(ContentContext)
    return (
        activeTabs.leftNavbar && <div className='left-navbar-container'>
            <h3 className='left-navbar-heading'>Left Navbar Menu</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    )
}

export default LeftNavbar