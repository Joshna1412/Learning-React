import React, { Component } from 'react'
import './index.css'

class WinCard extends Component {
    render() {
        const { score, onPlayAgain } = this.props
        return (
            <div className="game-over-card">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                    alt="trophy"
                    className="trophy-img"
                />
                <h1 className="game-over-title">YOUR SCORE</h1>
                <p className="score">{score}</p>
                <button className="play-again-btn" onClick={onPlayAgain}>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                        alt="reset"
                        className="reset-icon"
                    />
                    PLAY AGAIN
                </button>
            </div>
        )
    }
}

export default WinCard
