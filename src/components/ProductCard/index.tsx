import React from 'react'
import { NonPrimeProductItemContainer, ProductBrand, ProductCardLinkItem, ProductDetailsContainer, ProductPrice, ProductTitle, Rating, RatingContainer, Star, ThumnailImg } from '../styledComponents'
import { Product } from '../Interfaces-component/interfaces';


interface ProductCardProps {
    productData: Product;
    primeDeal: boolean;
};

const ProductCard: React.FC<ProductCardProps> = props => {
    const { productData } = props
    const { title, brand, imageUrl, rating, price, id } = productData

    return (
        <ProductCardLinkItem to={`/products/${id}`}>
            <NonPrimeProductItemContainer primeDeal>
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
