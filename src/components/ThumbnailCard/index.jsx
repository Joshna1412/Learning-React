import React, { Component } from 'react'
import './index.css'

class ThumbnailCard extends Component {
    handleClick = () => {
        const { onClick, id } = this.props
        onClick(id)
    }

    render() {
        const { thumbnailUrl } = this.props
        return (
            <li className="thumbnail-item" onClick={this.handleClick}>
                <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
            </li>
        )
    }
}

export default ThumbnailCard
