import { action, makeAutoObservable } from "mobx";
import ProductDetailsModel from "./ProductDetailsModel";
import { APIStatusEnum, ProductDetailsType } from "../types";
import { fetchAPI } from "../../utils/ApiUitls";

export class AllProductsModel {
  allProducts: ProductDetailsModel[];
  allProductsStatus: APIStatusEnum;
  allProductsAPIError: Error | null;

  activeOptionId: string = "PRICE_HIGH";
  activeCategoryId: string = "";
  searchInput: string = "";
  activeRatingId: string = "";

  constructor() {
    makeAutoObservable(this);
    this.allProducts = [];
    this.allProductsStatus = APIStatusEnum.INITIAL;
    this.allProductsAPIError = null;
  }

  @action
  setAPIStatus = (status: APIStatusEnum) => {
    this.allProductsStatus = status;
  };

  @action
  setAPIError = (error: Error | null) => {
    this.allProductsAPIError = error;
  };

  @action
  setAPIResponse = (response: { products: ProductDetailsType[] }) => {
    this.allProducts = response.products.map(
      (product: ProductDetailsType) => new ProductDetailsModel(product)
    );
  };

  @action
  setSortBy(optionId: string) {
    this.activeOptionId = optionId;
    this.fetchAllProducts();
  }

  @action
  setCategory(categoryId: string) {
    this.activeCategoryId = categoryId;
    this.fetchAllProducts();
  }

  @action
  setSearchInput(input: string) {
    this.searchInput = input;
    this.fetchAllProducts();
  }

  @action
  setRating(ratingId: string) {
    this.activeRatingId = ratingId;
    this.fetchAllProducts();
  }

  @action
  clearFilters() {
    this.activeCategoryId = "";
    this.searchInput = "";
    this.activeRatingId = "";
    this.fetchAllProducts();
  }

  fetchAllProducts = () => {
    const url = `https://apis.ccbp.in/products?sort_by=${this.activeOptionId}&category=${this.activeCategoryId}&title_search=${this.searchInput}&rating=${this.activeRatingId}`;

    fetchAPI(url, this.setAPIResponse, this.setAPIError, this.setAPIStatus);
  };
}
