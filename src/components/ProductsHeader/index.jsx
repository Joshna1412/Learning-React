import { BsFilterRight } from 'react-icons/bs'
import { ProductsHeaderContainer, ProductsListHeading, SelectOption, SortByContainer, SortByPara, SortBySelect } from '../styledComponents'

const ProductsHeader = props => {
    const { sortbyOptions, activeOptionId, updateActiveOptionId } = props

    const onChangeSortby = event => {
        updateActiveOptionId(event.target.value)
    }

    return (
        <ProductsHeaderContainer>
            <ProductsListHeading>All Products</ProductsListHeading>
            <SortByContainer>
                <BsFilterRight />
                <SortByPara>Sort by</SortByPara>
                <SortBySelect
                    value={activeOptionId}
                    onChange={onChangeSortby}
                >
                    {sortbyOptions.map(eachOption => (
                        <SelectOption
                            key={eachOption.optionId}
                            value={eachOption.optionId}
                        >
                            {eachOption.displayText}
                        </SelectOption>
                    ))}
                </SortBySelect>
            </SortByContainer>
        </ProductsHeaderContainer>
    )
}

export default ProductsHeader
