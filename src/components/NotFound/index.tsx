import React from 'react'
import Header from '../Header'
import { NotFoundImg, NotFoundImgContainer } from '../styledComponents'

const NotFound: React.FC = () => {
    return (
        <div>
            <Header />
            <NotFoundImgContainer>
                <NotFoundImg
                    src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
                    alt="not-found"
                />
            </NotFoundImgContainer>
        </div>
    )
}

export default NotFound