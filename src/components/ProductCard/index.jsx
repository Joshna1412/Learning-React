import { NonPrimeProductItemContainer, ProductBrand, ProductCardLinkItem, ProductDetailsContainer, ProductPrice, ProductTitle, Rating, RatingContainer, Star, ThumnailImg } from '../styledComponents'


const ProductCard = props => {
    const { productData } = props
    const { title, brand, imageUrl, rating, price, id } = productData

    return (
        <ProductCardLinkItem to={`/products/${id}`}>
            <NonPrimeProductItemContainer>
                <ThumnailImg src={imageUrl} alt="product" />
                <ProductTitle>{title}</ProductTitle>
                <ProductBrand>by {brand}</ProductBrand>
                <ProductDetailsContainer>
                    <ProductPrice>Rs {price}/-</ProductPrice>
                    <RatingContainer>
                        <Rating >{rating}</Rating>
                        <Star
                            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                            alt="star"
                        />
                    </RatingContainer>
                </ProductDetailsContainer>
            </NonPrimeProductItemContainer>
        </ProductCardLinkItem>
    )
}
export default ProductCard
