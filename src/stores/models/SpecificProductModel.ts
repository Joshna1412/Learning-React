import { action, makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";

interface Product {
  availability: string;
  brand: string;
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  title: string;
  totalReviews: number;
}

interface ProductDetailsData {
  productDetails: Product;
  similarProductsData: Product[];
}

type Status = "INITIAL" | "SUCCESS" | "FAILURE" | "IN_PROGRESS";

export class SpecificProductModel {
  data: ProductDetailsData | null = null;
  status: Status = "INITIAL";
  quantity: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setQuantity(q: number) {
    this.quantity = q > 0 ? q : 1;
  }

  incrementQuantity() {
    this.quantity += 1;
  }

  decrementQuantity() {
    if (this.quantity > 1) this.quantity -= 1;
  }

  async fetchProduct(id: string) {
    this.status = "IN_PROGRESS";
    const jwtToken = Cookies.get("jwt_token");
    const apiUrl = `https://apis.ccbp.in/products/${id}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (response.ok) {
      const fetchedData = await response.json();
      const format = (data: any): Product => ({
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
      });
      runInAction(() => {
        this.data = {
          productDetails: format(fetchedData),
          similarProductsData: fetchedData.similar_products.map(format),
        };
        this.status = "SUCCESS";
      });
    } else {
      runInAction(() => {
        this.status = "FAILURE";
      });
    }
  }
}
