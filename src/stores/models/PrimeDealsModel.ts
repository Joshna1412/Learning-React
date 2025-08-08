import { action, makeAutoObservable } from "mobx";
import ProductDetailsModel from "./ProductDetailsModel";
import {
  APIStatusEnum,
  PrimeDealsResponseType,
  ProductDetailsType,
} from "../types";
import { fetchAPI } from "../../utils/ApiUitls";

export class PrimeDealsModel {
  primeDealsProducts: ProductDetailsModel[];
  totalProductsCount: number;

  primeDealsAPIStatus: APIStatusEnum;
  primeDealsAPIError: Error | null;

  constructor() {
    makeAutoObservable(this);
    this.primeDealsProducts = [];
    this.totalProductsCount = 0;
    this.primeDealsAPIStatus = APIStatusEnum.INITIAL;
    this.primeDealsAPIError = null;
  }

  @action
  setPrimeDealsAPIStatus = (status: APIStatusEnum) => {
    this.primeDealsAPIStatus = status;
  };

  @action
  setPrimeDealsAPIError = (error: Error | null) => {
    this.primeDealsAPIError = error;
  };

  @action
  setPrimeDealsAPIResponse = (response: PrimeDealsResponseType) => {
    this.primeDealsProducts = response.prime_deals.map(
      (eachProduct: ProductDetailsType) => {
        return new ProductDetailsModel(eachProduct);
      }
    );
    this.totalProductsCount = response.total;
  };

  fetchPrimeDeals = () => {
    const apiUrl = "https://apis.ccbp.in/prime-deals";

    fetchAPI(
      apiUrl,
      this.setPrimeDealsAPIResponse,
      this.setPrimeDealsAPIError,
      this.setPrimeDealsAPIStatus
    );
  };
}
