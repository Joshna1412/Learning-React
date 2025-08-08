import { makeAutoObservable } from "mobx";
import { ProductDetailsType } from "../../types";

class ProductDetailsModel {
  id: number;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  rating: number;

  constructor(response: ProductDetailsType) {
    makeAutoObservable(this);
    this.id = response.id;
    this.title = response.title;
    this.brand = response.brand;
    this.price = response.price;
    this.imageUrl = response.image_url;
    this.rating = response.rating;
  }
}

export default ProductDetailsModel;
