export enum APIStatusEnum {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  INITIAL = "INITIAL",
  IN_PROGRESS = "IN_PROGRESS",
}

export interface ProductDetailsType {
  id: number;
  image_url: string;
  title: string;
  style: string;
  price: number;
  description: string;
  brand: string;
  total_reviews: number;
  rating: number;
  availability: string;
}

export interface SpecificProductDetailsType {
  id: number;
  image_url: string;
  title: string;
  style: string;
  price: number;
  description: string;
  brand: string;
  total_reviews: number;
  rating: number;
  availability: string;
  quantity: number;
}

export interface PrimeDealsResponseType {
  prime_deals: ProductDetailsType[];
  total: number;
}
