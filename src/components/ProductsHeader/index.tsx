import { BsFilterRight } from 'react-icons/bs'
import { ProductsHeaderContainer, ProductsListHeading, SelectOption, SortByContainer, SortByPara, SortBySelect } from '../styledComponents'
import React from 'react'

interface SortByOption {
    optionId: string,
    displayText: string
}

interface ProductsHeaderProps {
    sortbyOptions: SortByOption[],
    activeOptionId: string,
    updateActiveOptionId: (a: string) => void
}

const ProductsHeader: React.FC<ProductsHeaderProps> = props => {
    const { sortbyOptions, activeOptionId, updateActiveOptionId } = props

    const onChangeSortby = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
