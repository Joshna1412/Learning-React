import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimliarProductItem'

import {
    ProductItemDetailsContainer,
    ProductDetailsSuccessView,
    ProductDetailsContainer,
    ProductImage,
    ContentContainer,
    ProductName,
    PriceDetails,
    RatingAndReviewsCount,
    RatingContainer,
    Rating,
    Star,
    ReviewsCount,
    ProductDescription,
    LabelValueContainer,
    Label,
    Value,
    HorizontalLine,
    QuantityContainer,
    QuantityController,
    Quantity,
    AddToCartButton,
    SimilarProductsHeading,
    SimilarProductsList,
    ProductsDetailsLoaderContainer,
    ProductDetailsErrorViewContainer,
    ErrorViewImage,
    ProductNotFoundHeading,
} from '../styledComponents'
import { useStore } from '../../context/storeContext'

const SpecificProduct: React.FC = observer(() => {
    const { id = '' } = useParams()
    const { specificProductModel, cartStoreModel } = useStore()

    const { data, status, quantity } = specificProductModel

    useEffect(() => {
        specificProductModel.fetchProduct(id)
    }, [id])

    const onClickAddToCart = () => {
        if (data) {
            const { productDetails } = data
            const cartItem = {
                id: productDetails.id,
                title: productDetails.title,
                price: productDetails.price,
                brand: productDetails.brand,
                imageUrl: productDetails.imageUrl,
                quantity,
            }
            cartStoreModel.addCartItem(cartItem)
        }
    }

    const renderLoadingView = () => (
        <ProductsDetailsLoaderContainer data-testid="loader">
            <BeatLoader color="#7032a5" />
        </ProductsDetailsLoaderContainer>
    )

    const renderFailureView = () => (
        <ProductDetailsErrorViewContainer>
            <ErrorViewImage
                alt="error view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
            />
            <ProductNotFoundHeading>Product Not Found</ProductNotFoundHeading>
            <Link to="/products">
                <AddToCartButton type="button">Continue Shopping</AddToCartButton>
            </Link>
        </ProductDetailsErrorViewContainer>
    )

    const renderProductDetailsView = () => {
        if (!data) return null
        const { productDetails, similarProductsData } = data
        const {
            availability,
            brand,
            description,
            imageUrl,
            price,
            rating,
            title,
            totalReviews,
        } = productDetails

        return (
            <ProductDetailsSuccessView>
                <ProductDetailsContainer>
                    <ProductImage src={imageUrl} alt="product" />
                    <ContentContainer>
                        <ProductName>{title}</ProductName>
                        <PriceDetails>Rs {price}/-</PriceDetails>
                        <RatingAndReviewsCount>
                            <RatingContainer>
                                <Rating>{rating}</Rating>
                                <Star src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
                            </RatingContainer>
                            <ReviewsCount>{totalReviews} Reviews</ReviewsCount>
                        </RatingAndReviewsCount>
                        <ProductDescription>{description}</ProductDescription>
                        <LabelValueContainer>
                            <Label>Available:</Label>
                            <Value>{availability}</Value>
                        </LabelValueContainer>
                        <LabelValueContainer>
                            <Label>Brand:</Label>
                            <Value>{brand}</Value>
                        </LabelValueContainer>
                        <HorizontalLine />
                        <QuantityContainer>
                            <QuantityController
                                type="button"
                                onClick={() => specificProductModel.decrementQuantity()}
                                data-testid="minus"
                            >
                                <BsDashSquare className="quantity-controller-icon" />
                            </QuantityController>
                            <Quantity>{quantity}</Quantity>
                            <QuantityController
                                type="button"
                                onClick={() => specificProductModel.incrementQuantity()}
                                data-testid="plus"
                            >
                                <BsPlusSquare className="quantity-controller-icon" />
                            </QuantityController>
                        </QuantityContainer>
                        <AddToCartButton type="button" onClick={onClickAddToCart}>
                            ADD TO CART
                        </AddToCartButton>
                    </ContentContainer>
                </ProductDetailsContainer>
                <SimilarProductsHeading>Similar Products</SimilarProductsHeading>
                <SimilarProductsList>
                    {similarProductsData.map(each => (
                        <SimilarProductItem key={each.id} productDetails={each} />
                    ))}
                </SimilarProductsList>
            </ProductDetailsSuccessView>
        )
    }

    const renderProductDetails = () => {
        switch (status) {
            case 'SUCCESS':
                return renderProductDetailsView()
            case 'FAILURE':
                return renderFailureView()
            case 'IN_PROGRESS':
                return renderLoadingView()
            default:
                return null
        }
    }

    return (
        <>
            <Header />
            <ProductItemDetailsContainer>
                {renderProductDetails()}
            </ProductItemDetailsContainer>
        </>
    )
})

export default SpecificProduct
