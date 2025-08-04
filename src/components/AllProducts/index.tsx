import { useEffect } from 'react'
import { observer } from 'mobx-react'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import FiltersGroup from '../FiltersGroup'
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
} from '../styledComponents'
import BeatLoader from 'react-spinners/BeatLoader'
import { useStore } from '../../context/storeContext'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const AllProductsSection = observer(() => {
    const { allProductsModel } = useStore()
    useEffect(() => {
        allProductsModel.fetchProducts()
    }, [])

    const renderProductsListView = () => {
        const { products } = allProductsModel
        return products.length > 0 ? (
            <>
                <ProductsHeader
                    activeOptionId={allProductsModel.activeOptionId}
                    sortbyOptions={[
                        { optionId: 'PRICE_HIGH', displayText: 'Price (High-Low)' },
                        { optionId: 'PRICE_LOW', displayText: 'Price (Low-High)' },
                    ]}
                    updateActiveOptionId={allProductsModel.setSortBy.bind(allProductsModel)}
                />
                <AllProductsList>
                    {products.map(product => (
                        <ProductCard key={product.id} productData={product} primeDeal={false} />
                    ))}
                </AllProductsList>
            </>
        ) : (
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

    const renderLoadingView = () => (
        <ProductLoaderContainer>
            <BeatLoader color="#7032a5" />
        </ProductLoaderContainer>
    )

    const renderFailureView = () => (
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

    const renderAllProducts = () => {
        switch (allProductsModel.status) {
            case apiStatusConstants.success:
                return renderProductsListView()
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }

    return (
        <AllProductsContainer>
            <FiltersGroup
                searchInput={allProductsModel.searchInput}
                categoryOptions={[
                    { name: 'Clothing', categoryId: '1' },
                    { name: 'Electronics', categoryId: '2' },
                    { name: 'Appliances', categoryId: '3' },
                    { name: 'Grocery', categoryId: '4' },
                    { name: 'Toys', categoryId: '5' },
                ]}
                ratingsList={[
                    { ratingId: '4', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-4.png' },
                    { ratingId: '3', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-3.png' },
                    { ratingId: '2', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-2.png' },
                    { ratingId: '1', imageUrl: 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/rating-1.png' },
                ]}
                changeSearchInput={allProductsModel.setSearchInput.bind(allProductsModel)}
                enterSearchInput={allProductsModel.setSearchInput.bind(allProductsModel)}
                activeCategoryId={allProductsModel.activeCategoryId}
                activeRatingId={allProductsModel.activeRatingId}
                changeCategory={allProductsModel.setCategory.bind(allProductsModel)}
                changeRating={allProductsModel.setRating.bind(allProductsModel)}
                clearFilters={allProductsModel.clearFilters.bind(allProductsModel)}
            />
            {renderAllProducts()}
        </AllProductsContainer>
    )
})

export default AllProductsSection
