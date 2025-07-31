export interface ApiStatusConstants {
    initial: string,
    success: string,
    failure: string,
    inProgress: string
}

export interface Product {
    id: number,
    title: string,
    brand: string,
    price: number,
    imageUrl: string,
    rating: number
}

export interface ApiResponse<T> {
    status: string,
    data: T | null,
    errorMsg: string | null
}

export interface ApiProduct {
    id: string;
    title: string;
    brand: string;
    price: number;
    image_url: string;
    rating: number;
};