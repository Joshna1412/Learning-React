import { Link } from "react-router-dom"
import { GamingCardSection, GamingCardThumbnail, GamingCardTitle, GamingCardViews } from "../styled-components"
import { useContext } from "react"
import ThemeContext from "../ThemeContext"

const GamingCard = ({ video }) => {
    const { isDark } = useContext(ThemeContext)
    const { id, title, thumbnailUrl, viewCount } = video

    return (
        <Link to={`/videos/${id}`} style={{ textDecoration: "none" }}>
            <GamingCardSection $isdark={isDark}>
                <GamingCardThumbnail src={thumbnailUrl} alt={title} />
                <GamingCardTitle>{title}</GamingCardTitle>
                <GamingCardViews>{viewCount} Watching Worldwide</GamingCardViews>
            </GamingCardSection>
        </Link>
    )
}

export default GamingCard