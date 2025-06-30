import './index.css'

const MatchCard = ({ matchDetails, isLatest }) => {
    const {
        date,
        venue,
        result,
        competingTeam,
        competingTeamLogo,
        firstInnings,
        secondInnings,
        manOfTheMatch,
        umpires,
        matchStatus
    } = matchDetails

    if (isLatest) {
        return (
            <div className="latest-card">
                <div className="team-date-logo">
                    <div>
                        <h2>{competingTeam}</h2>
                        <p>{date}</p>
                        <p>{venue}</p>
                        <p>{result}</p>
                    </div>
                    <img src={competingTeamLogo} alt="competing team logo" className="latest-logo" />
                </div>
                <hr />
                <p><strong>First Innings:</strong> {firstInnings}</p>
                <p><strong>Second Innings:</strong> {secondInnings}</p>
                <p><strong>Man Of The Match:</strong> {manOfTheMatch}</p>
                <p><strong>Umpires:</strong> {umpires}</p>
            </div>
        )
    }

    return (
        <div className="match-card">
            <img src={competingTeamLogo} alt={`${competingTeam} logo`} className="team-logo" />
            <h4>{competingTeam}</h4>
            <p>{result}</p>
            <p className={matchStatus.includes('Won') ? 'win' : 'loss'}>
                {matchStatus.includes('Won') ? 'Won' : 'Lost'}
            </p>
        </div>
    )
}

export default MatchCard
