import { useState, useContext, useEffect } from 'react'
import Header from '../Header'
import {
    Banner, BannerContent, HomeContainer, HomeSection, HomePage, WebsiteLogo,
    GetPremiumBtn, HomeVideosContainer, SearchBar, SearchInput, SearchIcon,
    HomeVideosSection, NoResultsMessage, NoResultsSection,
    NoResultsImg, RetryButton,
    BannerCrossButton,
    FailureImg,
    FailureDescription,
    FailureHeading,
    HomeErrView,
    HomeVideosLoaderContainer,
    BannerLogo
} from '../styled-components'
import ThemeContext from "../ThemeContext"
import Cookies from 'js-cookie'
import HomeVideoCard from '../HomeVideoCard'
import DashBoard from '../DashBoard'
import { BeatLoader } from 'react-spinners'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const Home = () => {
    const { isDark } = useContext(ThemeContext)
    const [searchInput, setSearchInput] = useState('')
    const [videos, setVideos] = useState([])
    const [showBanner, setShowBanner] = useState(true)
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })

    const fetchVideos = async () => {
        setApiResponse({
            status: apiStatusConstants.inProgress,
            data: null,
            errorMsg: null,
        })
        try {
            const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt_token')}`,
                },
            }

            const response = await fetch(url, options)
            const data = await response.json()

            if (response.ok) {
                const formattedData = data.videos.map(video => ({
                    id: video.id,
                    title: video.title,
                    thumbnailUrl: video.thumbnail_url,
                    channel: video.channel.name,
                    channelLogo: video.channel.profile_image_url,
                    viewCount: video.view_count,
                    publishedAt: video.published_at,
                }))
                setVideos(formattedData)
                setApiResponse(prevApiResponse => ({
                    ...prevApiResponse,
                    status: apiStatusConstants.success,
                    data: formattedData,
                }))
            } else {
                setApiResponse(prevApiResponse => ({
                    ...prevApiResponse,
                    status: apiStatusConstants.failure,
                }))
                setVideos([])
            }
        } catch (error) {
            console.error('Failed to fetch videos:', error)
            setVideos([])
        }
    }

    useEffect(() => {
        fetchVideos()
    }, [searchInput])

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const handleRetry = () => {
        fetchVideos()
    }

    const renderSuccessView = () => (
        <HomeVideosSection>
            {videos.length > 0 ? (
                videos.map(video => (
                    <HomeVideoCard key={video.id} video={video} />
                ))
            ) : (
                <NoResultsSection>
                    <NoResultsImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no-videos"
                    />
                    <h3>No Search results found</h3>
                    <NoResultsMessage>
                        Try different key words or remove search filter
                    </NoResultsMessage>
                    <RetryButton onClick={handleRetry}>Retry</RetryButton>
                </NoResultsSection>
            )}
        </HomeVideosSection>
    )

    const renderLoadingView = () => (
        <HomeVideosLoaderContainer $isdark={isDark}>
            <BeatLoader color="#7032a5" />
        </HomeVideosLoaderContainer>
    )

    const renderFailureView = () => (
        <HomeErrView $isdark={isDark}>
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
            <FailureHeading>
                Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
                We are having some trouble processing your request. Please try again.
            </FailureDescription>
        </HomeErrView>
    )

    const renderAllVideos = () => {
        const { status } = apiResponse
        switch (status) {
            case apiStatusConstants.success:
                return renderSuccessView()
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }

    return (
        <HomePage $isdark={isDark}>
            <Header />
            <HomeSection $isdark={isDark}>
                <DashBoard />

                <HomeContainer>
                    {showBanner && (
                        <Banner>
                            <BannerContent>
                                <BannerCrossButton onClick={() => setShowBanner(false)}>X</BannerCrossButton>
                                <BannerLogo
                                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                                    alt="website logo"
                                />
                                <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                                <GetPremiumBtn>GET IT NOW</GetPremiumBtn>
                            </BannerContent>
                        </Banner>
                    )}

                    <HomeVideosContainer $isdark={isDark} $bannerShown={showBanner}>
                        <SearchBar>
                            <SearchInput
                                value={searchInput}
                                type="search"
                                $isdark={isDark}
                                placeholder="Search"
                                onChange={handleSearchInput}
                            />
                            <SearchIcon />
                        </SearchBar>
                        {renderAllVideos()}
                    </HomeVideosContainer>
                </HomeContainer>
            </HomeSection>
        </HomePage>
    )
}

export default Home
