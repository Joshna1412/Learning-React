import React from 'react'
import {
    SimilarProductItemContainer,
    SimilarProductImage,
    SimilarProductTitle,
    SimilarProductBrand,
    SimilarProductPriceRatingContainer,
    SimilarProductPrice,
    SimilarProductRatingContainer,
    SimilarProductRating,
    SimilarProductStar
} from '../StyledComponents'

interface Product {
    availability: string
    brand: string
    description: string
    id: string
    imageUrl: string
    price: number
    rating: number
    title: string
    totalReviews: number
}

interface SimilarProductItemProps {
    productDetails: Product,
    key: string
}

const SimilarProductItem: React.FC<SimilarProductItemProps> = props => {
    const { productDetails } = props
    const { title, brand, imageUrl, rating, price } = productDetails

    return (
        <SimilarProductItemContainer>
            <SimilarProductImage
                src={imageUrl}
                alt={`similar product ${title}`}
            />
            <SimilarProductTitle>{title}</SimilarProductTitle>
            <SimilarProductBrand>by {brand}</SimilarProductBrand>
            <SimilarProductPriceRatingContainer>
                <SimilarProductPrice>Rs {price}/-</SimilarProductPrice>
                <SimilarProductRatingContainer>
                    <SimilarProductRating>{rating}</SimilarProductRating>
                    <SimilarProductStar
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        alt="star"
                    />
                </SimilarProductRatingContainer>
            </SimilarProductPriceRatingContainer>
        </SimilarProductItemContainer>
    )
}

export default SimilarProductItem
