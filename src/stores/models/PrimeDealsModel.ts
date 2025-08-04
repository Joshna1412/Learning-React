import { action, makeAutoObservable, runInAction } from 'mobx'
import Cookies from 'js-cookie'
import { ApiProduct, Product } from "../../components/Interfaces-component/interfaces"

export const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

export class PrimeDealsModel {
    primeDeals: Product[] = []
    status: string = apiStatusConstants.initial
    errorMsg: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    @action
    fetchPrimeDeals = async () => {
        this.status = 'IN_PROGRESS'
        this.errorMsg = null

        const apiUrl = 'https://apis.ccbp.in/prime-deals'
        const jwtToken = Cookies.get('jwt_token')

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            })

            if (response.ok) {
                const data = await response.json()
                const formatted: Product[] = data.prime_deals.map((item: ApiProduct) => ({
                    id: item.id,
                    title: item.title,
                    brand: item.brand,
                    price: item.price,
                    imageUrl: item.image_url,
                    rating: item.rating,
                }))

                runInAction(() => {
                    this.primeDeals = formatted
                    this.status = 'SUCCESS'
                })
            } else {
                runInAction(() => {
                    this.status = 'FAILURE'
                    this.errorMsg = 'Failed to fetch prime deals'
                })
            }
        } catch (error) {
            runInAction(() => {
                this.status = 'FAILURE'
                this.errorMsg = (error as Error).message
            })
        }
    }
}