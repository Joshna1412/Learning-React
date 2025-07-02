import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ProductCard from '../ProductCard'
import BeatLoader from 'react-spinners/BeatLoader'
import ProductsHeader from '../ProductsHeader'
import './index.css'

const AllProducts = () => {
    const [productsList, setProductsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const sortbyOptions = [
        {
            optionId: 'PRICE_HIGH',
            displayText: 'Price (High-Low)',
        },
        {
            optionId: 'PRICE_LOW',
            displayText: 'Price (Low-High)',
        },
    ]

    const [activeOptionId, setActiveOptionId] = useState(sortbyOptions[0].optionId)

    const updateActiveOptionId = activeOptionId => {
        setActiveOptionId(activeOptionId)
    }


    useEffect(() => {
        const getProducts = async () => {
            const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
                method: 'GET',
            }
            const response = await fetch(apiUrl, options)
            if (response.ok === true) {
                const fetchedData = await response.json()
                const formattedData = fetchedData.products.map(product => ({
                    title: product.title,
                    brand: product.brand,
                    price: product.price,
                    id: product.id,
                    imageUrl: product.image_url,
                    rating: product.rating,
                }))
                setProductsList(formattedData)
                setIsLoading(false)
            }
        }
        getProducts()
    }, [activeOptionId])

    return <>{isLoading ? <div className="loading-container">
        <BeatLoader color="#0b69ff" />
    </div> : <div>
        <ProductsHeader
            sortbyOptions={sortbyOptions}
            activeOptionId={activeOptionId}
            updateActiveOptionId={updateActiveOptionId}
        />
        <ul className="products-list">
            {productsList.map(product => (
                <ProductCard productData={product} key={product.id} />
            ))}
        </ul>
    </div>}</>
}

export default AllProducts
