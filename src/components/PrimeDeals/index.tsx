// components/PrimeDeals.tsx
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import ProductCard from '../ProductCard'
import {
    PrimeDealsList,
    PrimeDealsListHeading,
    PrimeDealsLoader,
    RegisterPrimeImg,
} from '../styledComponents'
import BeatLoader from 'react-spinners/BeatLoader'
import { useStore } from '../../context/storeContext'

const PrimeDeals: React.FC = observer(() => {
    const { primeDealsModel } = useStore()
    const { status, primeDeals, fetchPrimeDeals } = primeDealsModel

    useEffect(() => {
        fetchPrimeDeals()
    }, [fetchPrimeDeals])

    const renderPrimeDealsList = () => (
        <div>
            <PrimeDealsListHeading>Exclusive Prime Deals</PrimeDealsListHeading>
            <PrimeDealsList>
                {primeDeals.map((product) => (
                    <ProductCard key={product.id} primeDeal={true} productData={product} />
                ))}
            </PrimeDealsList>
        </div>
    )

    const renderContent = () => {
        switch (status) {
            case 'IN_PROGRESS':
                return (
                    <PrimeDealsLoader>
                        <BeatLoader color="#0b69ff" />
                    </PrimeDealsLoader>
                )
            case 'SUCCESS':
                return renderPrimeDealsList()
            case 'FAILURE':
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

    return <>{renderContent()}</>
})

export default PrimeDeals
