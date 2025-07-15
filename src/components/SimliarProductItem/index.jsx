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
} from '../styledComponents'

const SimilarProductItem = props => {
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
