import { useContext, useEffect, useState } from "react"
import Header from "../Header"
import DashBoard from "../DashBoard"
import ThemeContext from "../ThemeContext"
import GamingCard from "../GamingCard"
import Cookies from 'js-cookie'
import {
    GamingVideosSection,
    ScrollableContainer,
    GamingVideosContainer,
    ErrorViewContainer,
    FailureImg,
    FailureHeading,
    FailureDescription,
    VideosLoaderContainer,
    Heading,
    GamingHeaderIcon
} from "../styled-components"
import { BeatLoader } from "react-spinners"

const Gaming = () => {
    const { isDark } = useContext(ThemeContext)
    const [videos, setVideos] = useState([])
    const [apiStatus, setApiStatus] = useState('IN_PROGRESS')

    const fetchGamingVideos = async () => {
        setApiStatus('IN_PROGRESS')
        const jwtToken = Cookies.get("jwt_token")
        const url = "https://apis.ccbp.in/videos/gaming"
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: "GET",
        }

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            if (response.ok) {
                const updatedVideos = data.videos.map(video => ({
                    id: video.id,
                    title: video.title,
                    thumbnailUrl: video.thumbnail_url,
                    viewCount: video.view_count,
                }))
                setVideos(updatedVideos)
                setApiStatus('SUCCESS')
            } else {
                setApiStatus('FAILURE')
            }
        } catch {
            setApiStatus('FAILURE')
        }
    }

    useEffect(() => {
        fetchGamingVideos()
    }, [])

    const renderLoadingView = () => (
        <VideosLoaderContainer $isdark={isDark}>
            <BeatLoader color="#7032a5" />
        </VideosLoaderContainer>
    )

    const renderFailureView = () => (
        <ErrorViewContainer $isdark={isDark}>
            {isDark ? (<FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="all-videos-error"
            />) : (
                <FailureImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                    alt="all-videos-error"
                />
            )
            }
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
                We are having some trouble processing your request. Please try again.
            </FailureDescription>
        </ErrorViewContainer>
    )

    const renderSuccessView = () => (
        <div style={{ width: '100%' }}>
            <Heading $isdark={isDark}>
                <GamingHeaderIcon />
                <span style={{ margin: '0px', fontSize: '30px', paddingTop: '5px' }}>Gaming</span>
            </Heading>
            <GamingVideosContainer $isdark={isDark}>
                {videos.length === 0 ? (
                    <p>No gaming videos</p>
                ) : (
                    videos.map(video => <GamingCard key={video.id} video={video} />)
                )}
            </GamingVideosContainer>
        </div>
    )

    const renderAllVideos = () => {
        switch (apiStatus) {
            case 'IN_PROGRESS':
                return renderLoadingView()
            case 'SUCCESS':
                return renderSuccessView()
            case 'FAILURE':
                return renderFailureView()
            default:
                return null
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <Header />
            <GamingVideosSection>
                <DashBoard />
                <ScrollableContainer>
                    {renderAllVideos()}
                </ScrollableContainer>
            </GamingVideosSection>
        </div>
    )
}

export default Gaming
