import { makeAutoObservable } from "mobx";
import { SpecificProductDetailsType } from "../../types";
import { Quantity } from "./../../../components/styledComponents/index";

class SpecificProductDetailsModel {
  id: number;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  rating: number;
  availability: string;
  description: string;
  totalReviews: number;
  quantity: number;

  constructor(response: SpecificProductDetailsType) {
    makeAutoObservable(this);
    this.id = response.id;
    this.title = response.title;
    this.brand = response.brand;
    this.price = response.price;
    this.imageUrl = response.image_url;
    this.rating = response.rating;
    this.availability = response.availability;
    this.description = response.description;
    this.totalReviews = response.total_reviews;
    this.quantity = response.quantity;
  }
}

export default SpecificProductDetailsModel;

// availability: data.availability,
//         brand: data.brand,
//         description: data.description,
//         id: data.id,
//         imageUrl: data.image_url,
//         price: data.price,
//         rating: data.rating,
//         title: data.title,
//         totalReviews: data.total_reviews,
