import { action, makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";
import {
  ApiProduct,
  Product,
} from "../../components/Interfaces-component/interfaces";

export const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

export class AllProductsModel {
  products: Product[] = [];
  status: string = apiStatusConstants.initial;
  errorMsg: string | null = null;

  activeOptionId = "PRICE_HIGH";
  activeCategoryId = "";
  searchInput = "";
  activeRatingId = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSortBy(optionId: string) {
    this.activeOptionId = optionId;
    this.fetchProducts();
  }

  setCategory(categoryId: string) {
    this.activeCategoryId = categoryId;
    this.fetchProducts();
  }

  setSearchInput(input: string) {
    this.searchInput = input;
    this.fetchProducts();
  }

  setRating(ratingId: string) {
    this.activeRatingId = ratingId;
    this.fetchProducts();
  }

  clearFilters() {
    this.activeCategoryId = "";
    this.searchInput = "";
    this.activeRatingId = "";
    this.fetchProducts();
  }

  async fetchProducts() {
    this.status = apiStatusConstants.inProgress;
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/products?sort_by=${this.activeOptionId}&category=${this.activeCategoryId}&title_search=${this.searchInput}&rating=${this.activeRatingId}`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        const formatted = data.products.map((product: ApiProduct) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }));
        runInAction(() => {
          this.products = formatted;
          this.status = apiStatusConstants.success;
        });
      } else {
        runInAction(() => {
          this.status = apiStatusConstants.failure;
        });
      }
    } catch {
      runInAction(() => {
        this.status = apiStatusConstants.failure;
      });
    }
  }
}
