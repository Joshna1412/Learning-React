import React from 'react'
import Header from '../Header'
import './index.css'

function NotFound() {
    return (
        <div>
            <Header />
            <div className="not-found-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
                    alt="not-found"
                    className="not-found-img"
                />
            </div>
        </div>
    )
}

export default NotFound