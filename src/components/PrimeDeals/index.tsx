import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import BeatLoader from 'react-spinners/BeatLoader'
import ProductCard from '../ProductCard'
import {
    PrimeDealsList,
    PrimeDealsListHeading,
    PrimeDealsLoader,
    RegisterPrimeImg,
} from '../styledComponents'
import { ApiProduct, ApiResponse, ApiStatusConstants, Product } from '../Interfaces-component/interfaces'



const apiStatusConstants: ApiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

const PrimeDeals: React.FC = () => {
    const [apiResponse, setApiResponse] = useState<ApiResponse<Product[]>>({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })

    useEffect(() => {
        const getPrimeDeals = async () => {
            setApiResponse({
                status: apiStatusConstants.inProgress,
                data: null,
                errorMsg: null,
            })

            const apiUrl = 'https://apis.ccbp.in/prime-deals'
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
                method: 'GET',
            }

            try {
                const response = await fetch(apiUrl, options)
                if (response.ok) {
                    const fetchedData = await response.json()
                    const formattedData: Product[] = fetchedData.prime_deals.map((product: ApiProduct) => ({
                        id: product.id,
                        title: product.title,
                        brand: product.brand,
                        price: product.price,
                        imageUrl: product.image_url,
                        rating: product.rating,
                    }))

                    setApiResponse({
                        status: apiStatusConstants.success,
                        data: formattedData,
                        errorMsg: null,
                    })
                } else {
                    setApiResponse({
                        status: apiStatusConstants.failure,
                        data: null,
                        errorMsg: 'Failed to fetch prime deals',
                    })
                }
            } catch (error) {
                setApiResponse({
                    status: apiStatusConstants.failure,
                    data: null,
                    errorMsg: (error as Error).message,
                })
            }
        }

        getPrimeDeals()
    }, [])

    const renderPrimeDealsList = () => {
        return (
            <div>
                <PrimeDealsListHeading>Exclusive Prime Deals</PrimeDealsListHeading>
                <PrimeDealsList>
                    {apiResponse.data?.map((product) => (
                        <ProductCard key={product.id} primeDeal={true} productData={product} />
                    ))}
                </PrimeDealsList>
            </div>
        )
    }

    const renderPrimeDeals = () => {
        const { status } = apiResponse
        switch (status) {
            case apiStatusConstants.inProgress:
                return (
                    <PrimeDealsLoader>
                        <BeatLoader color="#0b69ff" />
                    </PrimeDealsLoader>
                )
            case apiStatusConstants.success:
                return renderPrimeDealsList()
            case apiStatusConstants.failure:
                return (
                    <RegisterPrimeImg
                        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
                        alt="Register Prime"
                    />
                )
            default:
                return null
        }
    }

    return <>{renderPrimeDeals()}</>
}

export default PrimeDeals
