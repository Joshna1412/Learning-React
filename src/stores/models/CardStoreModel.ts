import { action, computed, makeAutoObservable } from "mobx";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  brand: string;
  imageUrl: string;
}

export class CartStoreModel {
  cartList: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCartItem = (item: CartItem) => {
    const existingItem = this.cartList.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartList.push({ ...item });
    }
  };

  updateQuantity(id: number, delta: number) {
    const item = this.cartList.find((i) => i.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.deleteCartItem(id);
      }
    }
  }

  deleteCartItem = (id: number) => {
    this.cartList = this.cartList.filter((item) => item.id !== id);
  };

  clearCart = () => {
    this.cartList = [];
  };

  get totalItems() {
    return this.cartList.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice() {
    return this.cartList.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }
}
