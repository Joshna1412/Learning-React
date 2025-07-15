import { useState, useEffect, useContext } from 'react'
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
    ProductContent,
    ProductName,
    PriceDetails,
    RatingAndReviews,
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
    QuantityButton,
    QuantityIcon,
    Quantity,
    ActionButton,
    SimilarProductsHeading,
    SimilarProductsList,
    LoaderContainer,
    ErrorContainer,
    ErrorImage,
    ErrorHeading
} from './styledComponents'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const SpecificProduct = () => {
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const { addCartItem } = useContext(CartContext)

    const onClickAddToCart = () => {
        const { data } = apiResponse
        const { productDetails } = data
        const productToAdd = { ...productDetails, quantity }
        addCartItem(productToAdd)
    }

    const getFormattedData = data => ({
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
        <LoaderContainer data-testid="loader">
            <BeatLoader color="#7032a5" />
        </LoaderContainer>
    )

    const renderFailureView = () => (
        <ErrorContainer>
            <ErrorImage
                alt="error view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
            />
            <ErrorHeading>Product Not Found</ErrorHeading>
            <Link to="/products">
                <ActionButton type="button">Continue Shopping</ActionButton>
            </Link>
        </ErrorContainer>
    )

    const renderProductDetailsView = () => {
        const { data } = apiResponse
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
                    <ProductContent>
                        <ProductName>{title}</ProductName>
                        <PriceDetails>Rs {price}/-</PriceDetails>
                        <RatingAndReviews>
                            <RatingContainer>
                                <Rating>{rating}</Rating>
                                <Star src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" />
                            </RatingContainer>
                            <ReviewsCount>{totalReviews} Reviews</ReviewsCount>
                        </RatingAndReviews>
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
                            <QuantityButton
                                type="button"
                                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : prev))}
                                data-testid="minus"
                            >
                                <BsDashSquare className="quantity-controller-icon" />
                            </QuantityButton>
                            <Quantity>{quantity}</Quantity>
                            <QuantityButton
                                type="button"
                                onClick={() => setQuantity(prev => prev + 1)}
                                data-testid="plus"
                            >
                                <BsPlusSquare className="quantity-controller-icon" />
                            </QuantityButton>
                        </QuantityContainer>
                        <ActionButton type="button" onClick={onClickAddToCart}>
                            ADD TO CART
                        </ActionButton>
                    </ProductContent>
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