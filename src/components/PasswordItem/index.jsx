import React, { Component } from 'react'
import './index.css'

class PasswordItem extends Component {
    render() {
        const { passwordDetails, onDelete } = this.props
        const { website, username, password, id } = passwordDetails
        const deletePassword = () => {
            onDelete(id)
        }
        return (
            <div className='password-container'>
                <div className='user-logo'>
                    <h1 className='logo-letter'>{website[0].toUpperCase()}</h1>
                </div>
                <div className='password-details'>
                    <h3 className='website-name'>{website}</h3>
                    <h3 className='username'>{username}</h3>
                    <p className='password'>{password}</p>
                </div>
                <div className='delete-icon-container'>
                    <img className='delete-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete-icon" onClick={deletePassword} />
                </div>
            </div>
        )
    }
}

export default PasswordItem