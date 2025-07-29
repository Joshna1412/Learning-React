import { Link } from "react-router-dom"
import { formatDistanceStrict } from "date-fns"
import { ChannelName, VideoBasicDetails, VideosCardSection, VideosTitle, VideoThumbnail } from "../styled-components"
import { useContext } from "react"
import ThemeContext from "../ThemeContext"

const VideosCard = ({ video }) => {
    const { isDark } = useContext(ThemeContext)
    return (
        <Link to={`/videos/${video.id}`} style={{ textDecoration: 'none' }}>
            <VideosCardSection $isdark={isDark}>
                <VideoThumbnail src={video.thumbnailUrl} alt="thumbnail" />
                <div style={{ marginLeft: 20 }}>
                    <VideosTitle>{video.title}</VideosTitle>
                    <ChannelName>{video.channel.name}</ChannelName>
                    <VideoBasicDetails>{video.viewCount} views • {formatDistanceStrict(new Date(video.publishedAt), new Date(), { addSuffix: true })}</VideoBasicDetails>
                </div>
            </VideosCardSection>
        </Link>
    )
}

export default VideosCard
