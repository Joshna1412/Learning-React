import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import MatchCard from '../MatchCard'
import './index.css'

const TeamList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [teamBannerUrl, setTeamBannerUrl] = useState('')
    const [latestMatch, setLatestMatch] = useState({})
    const [recentMatches, setRecentMatches] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getTeamData()
    }, [])

    const getTeamData = async () => {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()

        setTeamBannerUrl(data.team_banner_url)
        const latest = data.latest_match_details
        const updatedLatestMatch = {
            id: latest.id,
            date: latest.date,
            venue: latest.venue,
            result: latest.result,
            competingTeam: latest.competing_team,
            competingTeamLogo: latest.competing_team_logo,
            firstInnings: latest.first_innings,
            secondInnings: latest.second_innings,
            manOfTheMatch: latest.man_of_the_match,
            umpires: latest.umpires,
        }

        const updatedRecentMatches = data.recent_matches.map(each => ({
            id: each.id,
            date: each.date,
            venue: each.venue,
            result: each.result,
            competingTeam: each.competing_team,
            competingTeamLogo: each.competing_team_logo,
            firstInnings: each.first_innings,
            secondInnings: each.second_innings,
            manOfTheMatch: each.man_of_the_match,
            umpires: each.umpires,
            matchStatus: each.match_status,
        }))
        setLatestMatch(updatedLatestMatch)
        setRecentMatches(updatedRecentMatches)
        setIsLoading(false)
    }

    return (
        <div className="team-list-container">
            {isLoading ? (
                <Loader loading={isLoading} />
            ) : (
                <>
                    <img src={teamBannerUrl} alt="team banner" className="team-banner" />
                    <h2 className="latest-matches-heading">Latest Matches</h2>
                    <div className="latest-match-card">
                        <MatchCard matchDetails={latestMatch} isLatest />
                    </div>
                    <div className="recent-matches">
                        {recentMatches.map(match => (
                            <MatchCard key={match.id} matchDetails={match} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default TeamList
