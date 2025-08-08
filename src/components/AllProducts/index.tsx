import { useEffect } from 'react'
import { observer } from 'mobx-react'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import FiltersGroup from '../FiltersGroup'
import BeatLoader from 'react-spinners/BeatLoader'
import { useStore } from '../../context/storeContext'

import {
  AllProductsContainer,
  AllProductsList,
  NoProductsDescription,
  NoProductsHeading,
  NoProductsImg,
  NoProductsView,
  ProductFailureDescription,
  ProductFailureHeading,
  ProductFailureImg,
  ProductLoaderContainer,
  ProductsErrorViewContainer,
} from '../StyledComponents'

const API_STATUS = {
  INITIAL: 'INITIAL',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  IN_PROGRESS: 'IN_PROGRESS',
}

const SORT_BY_OPTIONS = [
  { optionId: 'PRICE_HIGH', displayText: 'Price (High-Low)' },
  { optionId: 'PRICE_LOW', displayText: 'Price (Low-High)' },
]

const CATEGORY_OPTIONS = [
  { name: 'Clothing', categoryId: '1' },
  { name: 'Electronics', categoryId: '2' },
  { name: 'Appliances', categoryId: '3' },
  { name: 'Grocery', categoryId: '4' },
  { name: 'Toys', categoryId: '5' },
]

const RATINGS_LIST = [
  { ratingId: '4', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-4.png' },
  { ratingId: '3', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-3.png' },
  { ratingId: '2', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-2.png' },
  { ratingId: '1', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-1.png' },
]

const AllProductsSection = observer(() => {
  const { allProductsModel } = useStore()

  useEffect(() => {
    allProductsModel.fetchProducts()
  }, [allProductsModel])

  const renderProductsList = (): React.JSX.Element => {
    const { products } = allProductsModel

    if (products.length === 0) {
      return (
        <NoProductsView>
          <NoProductsImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
            alt="no products"
          />
          <NoProductsHeading>No Products Found</NoProductsHeading>
          <NoProductsDescription>
            We could not find any products. Try other filters.
          </NoProductsDescription>
        </NoProductsView>
      )
    }

    return (
      <>
        <ProductsHeader
          activeOptionId={allProductsModel.activeOptionId}
          sortbyOptions={SORT_BY_OPTIONS}
          updateActiveOptionId={allProductsModel.setSortBy}
        />
        <AllProductsList>
          {products.map(product => (
            <ProductCard key={product.id} productData={product} primeDeal={false} />
          ))}
        </AllProductsList>
      </>
    )
  }

  const renderLoadingView = ():React.JSX.Element => (
    <ProductLoaderContainer>
      <BeatLoader color="#7032a5" />
    </ProductLoaderContainer>
  )

  const renderFailureView = (): React.JSX.Element => (
    <ProductsErrorViewContainer>
      <ProductFailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="all-products-error"
      />
      <ProductFailureHeading>Oops! Something Went Wrong</ProductFailureHeading>
      <ProductFailureDescription>
        We are having some trouble processing your request. Please try again.
      </ProductFailureDescription>
    </ProductsErrorViewContainer>
  )

  const renderContentByStatus = (): React.JSX.Element | null=> {
    switch (allProductsModel.status) {
      case API_STATUS.SUCCESS:
        return renderProductsList()
      case API_STATUS.FAILURE:
        return renderFailureView()
      case API_STATUS.IN_PROGRESS:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    <AllProductsContainer>
      <FiltersGroup
        searchInput={allProductsModel.searchInput}
        categoryOptions={CATEGORY_OPTIONS}
        ratingsList={RATINGS_LIST}
        changeSearchInput={allProductsModel.setSearchInput}
        enterSearchInput={allProductsModel.setSearchInput}
        activeCategoryId={allProductsModel.activeCategoryId}
        activeRatingId={allProductsModel.activeRatingId}
        changeCategory={allProductsModel.setCategory}
        changeRating={allProductsModel.setRating}
        clearFilters={allProductsModel.clearFilters}
      />
      {renderContentByStatus()}
    </AllProductsContainer>
  )
})

export default AllProductsSection
