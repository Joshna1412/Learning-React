import { useContext } from "react"
import Header from "../Header"
import DashBoard from "../DashBoard"
import ThemeContext from "../ThemeContext"
import VideosCard from "../VideosCard"
import { Container, Heading, NoSavedVideos, NoSavedVideosHeading, NoSavedVideosSection, SavedVideosComponent, SavedVideosContainer, SavedVideosSection, ScrollableContainer, TrendingHeaderIcon } from "../styled-components"

const SavedVideos = () => {
    const { savedVideos, isDark } = useContext(ThemeContext)

    return (
        <Container>
            <Header />
            <SavedVideosSection>
                <DashBoard />
                <ScrollableContainer>
                    <SavedVideosComponent $isdark={isDark}>
                        {savedVideos.length === 0 ? (
                            <NoSavedVideosSection>
                                <NoSavedVideos src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" />
                                <NoSavedVideosHeading>No saved Videos</NoSavedVideosHeading>
                                <p>You can save videos while watching</p>
                            </NoSavedVideosSection>
                        ) : (
                            <SavedVideosContainer $isdark={isDark}>
                                <Heading $isdark={isDark}>
                                    <TrendingHeaderIcon />
                                    <span style={{ margin: '0px', fontSize: '30px', paddingTop: '5px' }}>Saved Videos</span>
                                </Heading>
                                {savedVideos.map(video => (
                                    <VideosCard key={video.id} video={video} />
                                ))}
                            </SavedVideosContainer>
                        )}
                    </SavedVideosComponent>
                </ScrollableContainer>
            </SavedVideosSection>
        </Container>
    )
}

export default SavedVideos
