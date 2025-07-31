import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import BeatLoader from 'react-spinners/BeatLoader'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimliarProductItem'
import CartContext from '../CartContext'

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
import { ApiResponse, ApiStatusConstants } from '../Interfaces-component/interfaces'

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

interface ApiProduct {
    availability: string
    brand: string
    description: string
    id: string
    image_url: string
    price: number
    rating: number
    title: string
    total_reviews: number
}

interface ProductDetailsData {
    productDetails: Product
    similarProductsData: Product[]
}

const apiStatusConstants: ApiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const SpecificProduct: React.FC = () => {
    const [apiResponse, setApiResponse] = useState<ApiResponse<ProductDetailsData>>({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })
    const [quantity, setQuantity] = useState<number>(1)
    const params = useParams()
    const id = params.id || ''

    const { addCartItem } = useContext(CartContext)

    const onClickAddToCart = () => {
        if (apiResponse.data) {
            const { productDetails } = apiResponse.data
            const cartItem = {
                id: productDetails.id,
                title: productDetails.title,
                price: productDetails.price,
                brand: productDetails.brand,
                imageUrl: productDetails.imageUrl,
                quantity,
            }
            addCartItem(cartItem)
        }
    }


    const getFormattedData = (data: ApiProduct) => ({
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
    })

    useEffect(() => {
        const getProductData = async () => {
            setApiResponse({
                status: apiStatusConstants.inProgress,
                data: null,
                errorMsg: null,
            })
            const jwtToken = Cookies.get('jwt_token')
            const apiUrl = `https://apis.ccbp.in/products/${id}`
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
                method: 'GET',
            }

            const response = await fetch(apiUrl, options)
            if (response.ok) {
                const fetchedData = await response.json()
                const formattedProductDetails = getFormattedData(fetchedData)
                const formattedSimilarProductsData = fetchedData.similar_products.map(
                    eachSimilarProduct => getFormattedData(eachSimilarProduct)
                )
                setApiResponse({
                    status: apiStatusConstants.success,
                    data: {
                        productDetails: formattedProductDetails,
                        similarProductsData: formattedSimilarProductsData,
                    },
                    errorMsg: null
                })
            } else {
                setApiResponse({
                    status: apiStatusConstants.failure,
                    data: null,
                    errorMsg: 'Something went wrong'
                })
            }
        }
        getProductData()
    }, [id])

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
        const { data } = apiResponse
        if (!data) {
            return null
        }
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
                                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : prev))}
                                data-testid="minus"
                            >
                                <BsDashSquare className="quantity-controller-icon" />
                            </QuantityController>
                            <Quantity>{quantity}</Quantity>
                            <QuantityController
                                type="button"
                                onClick={() => setQuantity(prev => prev + 1)}
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
                    {similarProductsData.map(eachSimilarProduct => (
                        <SimilarProductItem
                            productDetails={eachSimilarProduct}
                            key={eachSimilarProduct.id}
                        />
                    ))}
                </SimilarProductsList>
            </ProductDetailsSuccessView>
        )
    }

    const renderProductDetails = () => {
        const { status } = apiResponse
        switch (status) {
            case apiStatusConstants.success:
                return renderProductDetailsView()
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
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
}

export default SpecificProduct