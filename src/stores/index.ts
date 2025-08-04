import { AllProductsModel } from './models/AllProductsModel'
import { CartStoreModel } from './models/CardStoreModel'
import { LoginModel } from './models/LoginModel'
import { PrimeDealsModel } from './models/PrimeDealsModel'
import { SpecificProductModel } from './models/SpecificProductModel'

export class RootStore {
    allProductsModel: AllProductsModel
    specificProductModel: SpecificProductModel
    primeDealsModel: PrimeDealsModel
    cartStoreModel: CartStoreModel
    loginModel: LoginModel

    constructor() {
        this.allProductsModel = new AllProductsModel()
        this.specificProductModel = new SpecificProductModel()
        this.primeDealsModel = new PrimeDealsModel()
        this.cartStoreModel = new CartStoreModel()
        this.loginModel = new LoginModel()
    }
}

const rootStore = new RootStore()
export default rootStore
