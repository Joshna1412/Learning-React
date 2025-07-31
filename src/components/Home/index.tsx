import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { Button, ContentContainer, Description, Heading, HomeContainer, HomeContentContainer, HomeImg } from '../styledComponents'

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Header />
            <HomeContentContainer >
                <ContentContainer>
                    <Heading>Clothes That Get YOU Noticed</Heading>
                    <Description>
                        Fashion is part of the daily air and it does not quite help that it
                        changes all the time. Clothes have always been a marker of the era
                        and we are in a revolution. Your fashion makes you been seen and
                        heard that way you are. So, celebrate the seasons new and exciting
                        fashion in your own way.
                    </Description>
                    <Link to="/products">
                        <Button type="button">
                            Shop Now
                        </Button>
                    </Link>
                </ContentContainer>
                <div>
                    <HomeImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                        alt="clothes that get you noticed"
                    />
                </div>
            </HomeContentContainer>
        </HomeContainer>
    )
}

export default Home