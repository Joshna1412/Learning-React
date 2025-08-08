import React from 'react'
import AllProducts from '../AllProducts'
import Header from '../Header'
import PrimeDeals from '../PrimeDeals'
import { ProductsContainer } from '../StyledComponents'

const Products: React.FC = () => (
    <div>
        <Header />
        <ProductsContainer>
            <PrimeDeals />
            <AllProducts />
        </ProductsContainer>
    </div>
)

export default Products
