import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import ProductCard from '../ProductCard'
import BeatLoader from 'react-spinners/BeatLoader'

import {
    PrimeDealsList,
    PrimeDealsListHeading,
    PrimeDealsLoader,
    RegisterPrimeImg,
} from '../StyledComponents'

import { useStore } from '../../context/storeContext'

const API_STATUS = {
  INITIAL: 'INITIAL',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const PrimeDeals: React.FC = observer(() => {
  const { primeDealsModel } = useStore()
  const { status, primeDeals, fetchPrimeDeals } = primeDealsModel

  useEffect(() => {
    fetchPrimeDeals()
  }, [fetchPrimeDeals])

  const renderLoader = (): React.JSX.Element => (
    <PrimeDealsLoader>
      <BeatLoader color="#0b69ff" />
    </PrimeDealsLoader>
  )

  const renderPrimeDealsList = (): React.JSX.Element => (
    <>
      <PrimeDealsListHeading>Exclusive Prime Deals</PrimeDealsListHeading>
      <PrimeDealsList>
        {primeDeals.map((product) => (
          <ProductCard
            key={product.id}
            primeDeal={true}
            productData={product}
          />
        ))}
      </PrimeDealsList>
    </>
  )

  const renderFailureView = (): React.JSX.Element => (
    <RegisterPrimeImg
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register for Prime to view exclusive deals"
    />
  )

  const renderContent = (): React.JSX.Element | null => {
    switch (status) {
      case API_STATUS.IN_PROGRESS:
        return renderLoader()
      case API_STATUS.SUCCESS:
        return renderPrimeDealsList()
      case API_STATUS.FAILURE:
        return renderFailureView()
      default:
        return null
    }
  }

  return <>{renderContent()}</>
})

export default PrimeDeals
