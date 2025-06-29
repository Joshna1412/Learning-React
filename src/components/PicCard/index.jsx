import React, { Component } from 'react'
import './index.css'

class PicCard extends Component {
    render() {
        const { imageUrl } = this.props
        return (
            <div className="pic-card">
                <img src={imageUrl} alt="match" className="main-image" />
            </div>
        )
    }
}

export default PicCard
