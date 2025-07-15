import { BsSearch } from 'react-icons/bs'
import { AddUp, CategoryItem, CategoryName, ClearFilterButton, FilterCategoryHeading, FilterCategoryList, FiltersGroupContainer, RatingHeading, RatingImg, RatingItem, RatingList, SearchIcon, SearchInput, SearchInputContainer } from '../styledComponents'

const FiltersGroup = (props) => {
    const renderRatingsFiltersList = () => {
        const { ratingsList } = props

        return ratingsList.map(rating => {
            const { changeRating, activeRatingId } = props
            const isactiverating = activeRatingId === rating.ratingId

            const onClickRatingItem = () => changeRating(rating.ratingId)

            return (
                <RatingItem
                    key={rating.ratingId}
                    onClick={onClickRatingItem}
                >
                    <RatingImg
                        src={rating.imageUrl}
                        alt={`rating ${rating.ratingId}`}
                    />
                    <AddUp isActiveRating={isactiverating}>& up</AddUp>
                </RatingItem>
            )
        })
    }

    const renderRatingsFilters = () => (
        <div>
            <RatingHeading>Rating</RatingHeading>
            <RatingList>{renderRatingsFiltersList()}</RatingList>
        </div>
    )

    const renderCategoriesList = () => {
        const { categoryOptions } = props

        return categoryOptions.map(category => {
            const { changeCategory, activeCategoryId } = props
            const onClickCategoryItem = () => changeCategory(category.categoryId)
            const isActive = category.categoryId === activeCategoryId

            return (
                <CategoryItem
                    key={category.categoryId}
                    onClick={onClickCategoryItem}
                >
                    <CategoryName isActive={isActive}>{category.name}</CategoryName>
                </CategoryItem>
            )
        })
    }

    const renderProductCategories = () => (
        <>
            <FilterCategoryHeading>Category</FilterCategoryHeading>
            <FilterCategoryList>{renderCategoriesList()}</FilterCategoryList>
        </>
    )

    const onEnterSearchInput = event => {
        const { enterSearchInput } = props
        if (event.key === 'Enter') {
            enterSearchInput()
        }
    }

    const onChangeSearchInput = event => {
        const { changeSearchInput } = props
        changeSearchInput(event.target.value)
    }

    const renderSearchInput = () => {
        const { searchInput } = props
        return (
            <SearchInputContainer>
                <SearchInput
                    value={searchInput}
                    type="search"
                    placeholder="Search"
                    onChange={onChangeSearchInput}
                    onKeyDown={onEnterSearchInput}
                />
                <SearchIcon />
            </SearchInputContainer>
        )
    }

    const { clearFilters } = props

    return (
        <FiltersGroupContainer>
            {renderSearchInput()}
            {renderProductCategories()}
            {renderRatingsFilters()}
            <ClearFilterButton
                type="button"
                onClick={clearFilters}
            >
                Clear Filters
            </ClearFilterButton>
        </FiltersGroupContainer>
    )
}

export default FiltersGroup