import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import ThemeContext from '../ThemeContext'
import Cookies from 'js-cookie'
import {
    VideoDetailsContainer,
    VideoFrame,
    ActionButtons,
    HorizontalLine,
    ChannelInfoSection,
    ChannelDescription,
    SubscribersText,
    DescriptionText,
    VideoDetailsChannelName,
    VideoDetailsChannelLogo,
    VideoDetailsTitle,
    VideoDetailsSection,
    VideoInfo,
    ActionButton,
    VideoDetailsComponent
} from '../styled-components'
import Header from '../Header'
import DashBoard from '../DashBoard'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { RiMenuAddLine } from 'react-icons/ri'
import { formatDistanceStrict } from 'date-fns'

const VideoDetails = () => {
    const { id } = useParams()
    const { isDark, addSavedVideo, deleteSaved, checkSavedVideo, toggleLikeVideo, toggleDislikeVideo, isVideoLiked, isVideoDisliked } = useContext(ThemeContext)
    const [video, setVideo] = useState(null)
    const [saved, setSaved] = useState(false)

    const fetchVideoDetails = async () => {
        const url = `https://apis.ccbp.in/videos/${id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`,
            },
        }

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                const v = data.video_details
                setVideo({
                    id: v.id,
                    title: v.title,
                    videoUrl: v.video_url,
                    thumbnailUrl: v.thumbnail_url,
                    viewCount: v.view_count,
                    publishedAt: v.published_at,
                    description: v.description,
                    channel: {
                        name: v.channel.name,
                        logo: v.channel.profile_image_url,
                        subscribersCount: v.channel.subscriber_count,
                    },
                })
            }
        } catch (err) {
            console.error('Error fetching video details:', err)
        }
    }

    const checkSaved = () => {
        const alreadySaved = checkSavedVideo(id)
        setSaved(alreadySaved)
    }

    useEffect(() => {
        fetchVideoDetails()
    }, [id])

    useEffect(() => {
        checkSaved()
    }, [video])

    if (!video) return <p>Loading...</p>

    const handleLike = () => {
        toggleLikeVideo(video.id)
    }

    const handleDislike = () => {
        toggleDislikeVideo(video.id)
    }


    const handleSave = () => {
        if (saved) {
            setSaved(false)
            deleteSaved(video)
        }
        else {
            setSaved(true)
            addSavedVideo(video)
        }
    }

    return (
        <VideoDetailsComponent>
            <Header />
            <VideoDetailsSection>
                <DashBoard />
                <VideoDetailsContainer $isdark={isDark}>
                    <VideoFrame
                        src={video.videoUrl.replace('watch?v=', 'embed/')}
                        title={video.title}
                        allowFullScreen
                    />
                    <VideoDetailsTitle>{video.title}</VideoDetailsTitle>

                    <VideoInfo>
                        <div style={{ marginTop: '15px', display: "flex", flexDirection: 'row', justifyContent: 'space-around' }}>
                            <span style={{ marginRight: '10px' }}>{video.viewCount} views</span>
                            {video.publishedAt && (
                                <span>
                                    {formatDistanceStrict(new Date(video.publishedAt), new Date(), {
                                        addSuffix: true,
                                    })}
                                </span>
                            )}
                        </div>
                        <ActionButtons $isdark={isDark}>
                            <ActionButton active={isVideoLiked(video.id)} onClick={handleLike}>
                                <FaRegThumbsUp /> {isVideoLiked(video.id) ? 'Liked' : 'Like'}
                            </ActionButton>
                            <ActionButton active={isVideoDisliked(video.id)} onClick={handleDislike}>
                                <FaRegThumbsDown />{isVideoDisliked(video.id) ? 'Disliked' : 'Dislike'}
                            </ActionButton>
                            <ActionButton active={saved} onClick={handleSave}>
                                <RiMenuAddLine /> {saved ? 'Saved' : 'Save'}
                            </ActionButton>
                        </ActionButtons>
                    </VideoInfo>

                    <HorizontalLine />

                    <ChannelInfoSection>
                        <VideoDetailsChannelLogo src={video.channel.logo} alt="channel-logo" />
                        <ChannelDescription>
                            <VideoDetailsChannelName>{video.channel.name}</VideoDetailsChannelName>
                            <SubscribersText>{video.channel.subscribersCount} subscribers</SubscribersText>
                            <DescriptionText>{video.description}</DescriptionText>
                        </ChannelDescription>
                    </ChannelInfoSection>
                </VideoDetailsContainer>
            </VideoDetailsSection>
        </VideoDetailsComponent>
    )
}

export default VideoDetails
