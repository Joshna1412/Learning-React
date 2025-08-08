import { action, makeAutoObservable } from "mobx";
import ProductDetailsModel from "./ProductDetailsModel";
import {
  APIStatusEnum,
  ProductDetailsType,
  SpecificProductDetailsType,
} from "../types";
import { fetchAPI } from "../../utils/ApiUitls";
import SpecificProductDetailsModel from "./SpecificProductDetailsModel/index";
// import SpecificProduct from "./../../components/SpecificProduct/index";

interface FormattedProductDetailsData {
  productDetails: SpecificProductDetailsModel;
  similarProductsData: SpecificProductDetailsModel[];
}

export class SpecificProductModel {
  specificProductData: FormattedProductDetailsData | null;
  specificProductStatus: APIStatusEnum;
  specificProductError: Error | null;
  specificProductQuantity: number;

  constructor() {
    makeAutoObservable(this);
    this.specificProductData = null;
    this.specificProductQuantity = 1;
    this.specificProductStatus = APIStatusEnum.INITIAL;
    this.specificProductError = null;
  }

  @action
  setSpecificProductStatus = (status: APIStatusEnum) => {
    this.specificProductStatus = status;
  };

  @action
  setSpecificProductError = (error: Error | null) => {
    this.specificProductError = error;
  };

  @action
  setSpecificProductResponse = (response: any) => {
    const format = (data: SpecificProductDetailsType) =>
      new SpecificProductDetailsModel(data);
    this.specificProductData = {
      productDetails: format(response),
      similarProductsData: response.similar_products.map(format),
    };
  };

  @action
  setQuantity = (q: number) => {
    this.specificProductQuantity = q > 0 ? q : 1;
  };

  @action
  incrementQuantity = () => {
    this.specificProductQuantity += 1;
  };

  @action
  decrementQuantity = () => {
    if (this.specificProductQuantity > 1) {
      this.specificProductQuantity -= 1;
    }
  };

  fetchSpecificProductAPI = (id: string) => {
    const apiUrl = `https://apis.ccbp.in/products/${id}`;
    fetchAPI(
      apiUrl,
      this.setSpecificProductResponse,
      this.setSpecificProductError,
      this.setSpecificProductStatus
    );
  };
}
