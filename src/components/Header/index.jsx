import React, { Component } from 'react'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='logo-container'>
                    <img className='logo-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png " alt="logo-img" />
                </div>
            </div>
        )
    }
}

export default Header