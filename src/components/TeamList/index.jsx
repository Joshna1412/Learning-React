import { Component, useEffect, useState } from 'react'
import Loader from '../Loader'
import './index.css'
import { useParams } from 'react-router-dom'
const TeamList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [teamData, setTeamData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        console.log(id, 'match')
        getTeamItemData()
    }, [])

    const getTeamItemData = async () => {

        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()

        const updatedData = {
            teamBannerUrl: data.team_banner_url,
            competingTeam: data.latest_match_details.competing_team,
            competingTeamLogo: data.latest_match_details.competing_team_logo,
            firstInnings: data.latest_match_details.first_innings,
            secondInnings: data.latest_match_details.second_innings,
            result: data.latest_match_details.result
        }

        setTeamData(updatedData)
        setIsLoading(false)
    }

    const renderTeamDetails = () => {
        const { teamBannerUrl, competingTeam, competingTeamLogo, firstInnings, secondInnings, result } = teamData

        return (
            <div className="team-details">
                <img src={teamBannerUrl} alt="team banner" className="team-banner" />
                <h3 className='last-matches-heading'>Last Matches</h3>
                <div className='last-matches-container'>
                    <div className='competing-team-details'>
                        <h2>{competingTeam}</h2>
                        <img className='competing-team-logo' src={competingTeamLogo} alt="competing-team-logo" />
                    </div>
                    <h4>Result: {result}</h4>
                    <h4>First Innings: {firstInnings}</h4>
                    <h4>Second Innnigs: {secondInnings}</h4>
                </div>
            </div>
        )
    }


    return (
        <div className="team-details-container">
            {isLoading ? <Loader loading={isLoading} /> : renderTeamDetails()}
        </div>
    )
}

export default TeamList
