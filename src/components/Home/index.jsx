import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
    state = { isLoading: true, teamsData: [] }

    componentDidMount() {
        this.getTeamsData()
    }

    getTeamsData = async () => {
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()

        const formattedData = data.teams.map(eachItem => ({
            id: eachItem.id,
            title: eachItem.name,
            imageUrl: eachItem.team_image_url
        }))

        this.setState({ teamsData: formattedData, isLoading: false })
    }

    render() {
        const { isLoading, teamsData } = this.state

        return (
            <div className="home-container">
                <div className="heading-logo-container">
                    <img
                        className="ipl-logo"
                        src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                        alt="ipl logo"
                    />
                    <h1 className="heading">IPL Dashboard</h1>
                </div>

                <ul className="teams-cards-container">
                    {isLoading ? (
                        <Loader loading={isLoading} />
                    ) : (
                        teamsData.map(each => (
                            <li key={each.id} className='team-item'>
                                <Link to={`/team-matches/${each.id}`} className="team-link">
                                    <TeamCard teamDetails={each} />
                                </Link>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        )
    }
}

export default Home
