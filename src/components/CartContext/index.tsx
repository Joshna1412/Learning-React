import React from 'react'

interface CartItem {
    id: string,
    title: string,
    price: number,
    quantity: number,
    brand: string,
    imageUrl: string
}

interface CartContextType {
    cartList: CartItem[]
    addCartItem: (item: CartItem) => void
    deleteCartItem: (id: string) => void
}

const CartContext = React.createContext<CartContextType>({
    cartList: [],
    addCartItem: () => { },
    deleteCartItem: () => { },
})

export default CartContext
