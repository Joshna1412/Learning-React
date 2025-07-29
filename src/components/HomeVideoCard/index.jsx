import { useContext } from 'react'
import {
    HomeVideoSection,
    HomeVideoThumbnail,
    VideoContentSection,
    ChannelLogo,
    VideoTextSection,
    VideoTitle,
    ChannelName,
    VideoBasicDetails,
} from '../styled-components'
import ThemeContext from '../ThemeContext'
import { useNavigate } from 'react-router-dom'

const HomeVideoCard = ({ video }) => {
    const { isDark } = useContext(ThemeContext)
    const navigate = useNavigate()
    const handleClick = () => navigate(`/videos/${video.id}`)

    return (
        <HomeVideoSection $isdark={isDark} onClick={handleClick}>
            <HomeVideoThumbnail src={video.thumbnailUrl} alt="video-thumbnail" />
            <VideoContentSection>
                <ChannelLogo src={video.channelLogo} alt="channel-logo" />
                <VideoTextSection>
                    <VideoTitle>{video.title}</VideoTitle>
                    <ChannelName $isdark={isDark}>{video.channel}</ChannelName>
                    <VideoBasicDetails $isdark={isDark}>
                        <span>{video.viewCount} views</span>
                        <span>• {video.publishedAt}</span>
                    </VideoBasicDetails>
                </VideoTextSection>
            </VideoContentSection>
        </HomeVideoSection>
    )
}

export default HomeVideoCard
