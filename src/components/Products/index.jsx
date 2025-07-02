import AllProducts from '../AllProducts'

import Header from '../Header'
import PrimeDeals from '../PrimeDeals'

import './index.css'

const Products = () => (
    <div>
        <Header />
        <div className="product-container">
            <PrimeDeals />
            <AllProducts />
        </div>
    </div>
)

export default Products
