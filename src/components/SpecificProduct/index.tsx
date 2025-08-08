import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import BeatLoader from 'react-spinners/BeatLoader'

import Header from '../Header'
import SimilarProductItem from '../SimliarProductItem'
import { useStore } from '../../context/storeContext'

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
} from '../StyledComponents'

const API_STATUS = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  IN_PROGRESS: 'IN_PROGRESS',
  INITIAL: 'INITIAL',
}

const SpecificProduct: React.FC = observer(() => {
  const { id = '' } = useParams()
  const { specificProductModel, cartStoreModel } = useStore()
  // const {fetchSpecificProductAPI, specificProductStatus,specificProductData} = specificProductModel

  const {
    specificProductData,
    specificProductStatus,
    specificProductQuantity,
    fetchSpecificProductAPI,
    incrementQuantity,
    decrementQuantity,
  } = specificProductModel

  useEffect(() => {
    specificProductModel.fetchSpecificProductAPI(id);
    }, [id]);


  const handleAddToCart = (): void => {
    if (!specificProductData) return

    const { productDetails } = specificProductData
    const cartItem = {
      id: productDetails.id,
      title: productDetails.title,
      price: productDetails.price,
      brand: productDetails.brand,
      imageUrl: productDetails.imageUrl,
      quantity: specificProductQuantity,
    }

    cartStoreModel.addCartItem(cartItem)
  }

  const renderLoadingView = (): React.JSX.Element => (
    <ProductsDetailsLoaderContainer data-testid="loader">
      <BeatLoader color="#7032a5" />
    </ProductsDetailsLoaderContainer>
  )

  const renderFailureView = (): React.JSX.Element => (
    <ProductDetailsErrorViewContainer>
      <ErrorViewImage
        alt="Product not found"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
      />
      <ProductNotFoundHeading>Product Not Found</ProductNotFoundHeading>
      <Link to="/products">
        <AddToCartButton type="button">Continue Shopping</AddToCartButton>
      </Link>
    </ProductDetailsErrorViewContainer>
  )

  const renderProductDetailsView = (): React.JSX.Element | null => {
    if (!specificProductData) return null

    const { productDetails, similarProductsData } = specificProductData
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
          <ProductImage src={imageUrl} alt={`product ${title}`} />

          <ContentContainer>
            <ProductName>{title}</ProductName>
            <PriceDetails>Rs {price}/-</PriceDetails>

            <RatingAndReviewsCount>
              <RatingContainer>
                <Rating>{rating}</Rating>
                <Star
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="rating star"
                />
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
              <QuantityController type="button" onClick={decrementQuantity} data-testid="minus">
                <BsDashSquare className="quantity-controller-icon" />
              </QuantityController>

              <Quantity>{specificProductQuantity}</Quantity>

              <QuantityController type="button" onClick={incrementQuantity} data-testid="plus">
                <BsPlusSquare className="quantity-controller-icon" />
              </QuantityController>
            </QuantityContainer>

            <AddToCartButton type="button" onClick={handleAddToCart}>
              ADD TO CART
            </AddToCartButton>
          </ContentContainer>
        </ProductDetailsContainer>

        <SimilarProductsHeading>Similar Products</SimilarProductsHeading>
        <SimilarProductsList>
          {similarProductsData.map((product) => (
            <SimilarProductItem key={`${product.id}-${product.title}`} productDetails={product} />
          ))}
        </SimilarProductsList>
      </ProductDetailsSuccessView>
    )
  }

  const renderProductDetails = (): React.JSX.Element | null => {
    switch (specificProductStatus) {
      case API_STATUS.SUCCESS:
        return renderProductDetailsView()
      case API_STATUS.FAILURE:
        return renderFailureView()
      case API_STATUS.IN_PROGRESS:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <ProductItemDetailsContainer>{renderProductDetails()}</ProductItemDetailsContainer>
    </>
  )
})

export default SpecificProduct
