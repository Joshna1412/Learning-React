import React, { Component } from 'react'
import './index.css'

class Header extends Component {
    render() {
        const { score, timer } = this.props
        return (
            <div className="header">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                    alt="website logo"
                    className="logo"
                />
                <div className="score-timer">
                    <p className="score-text">Score: <span className="score">{score}</span></p>
                    <div className="timer-container">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                            alt="timer"
                            className="timer-icon"
                        />
                        <p className="timer">{timer}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
