import React, { Component } from 'react'

import './index.css'


class TeamCard extends Component {
    render() {
        const { teamDetails } = this.props
        const { title, imageUrl } = teamDetails
        return (
            <div className='card-container'>
                <div>
                    <img className='image' src={imageUrl} alt="team-image" />
                </div>
                <div>
                    <h2 className='title'>{title}</h2>
                </div>
            </div>
        )
    }
}

export default TeamCard