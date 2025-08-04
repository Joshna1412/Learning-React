import React from 'react'
import { observer } from 'mobx-react-lite'
// import { cartStore } from "../CartContext/CartStore"
import CartItem from '../CartItem'
import {
    CartList,
    CartHeader,
    RemoveAllButton,
    OrderCountContainer,
    HeadingTotal,
    AmountText,
    ItemsCountPara,
    CheckoutButton,
} from '../styledComponents'
import { useStore } from '../../context/storeContext'

const CartListView: React.FC = observer(() => {
    const { cartStoreModel } = useStore()
    const onDeleteAll = () => {
        cartStoreModel.clearCart()
    }

    return (
        <div>
            <CartHeader>
                <h1>My Cart</h1>
                <RemoveAllButton onClick={onDeleteAll}>Remove All</RemoveAllButton>
            </CartHeader>

            <CartList>
                {cartStoreModel.cartList.map(item => (
                    <CartItem key={item.id} cartItemDetails={item} />
                ))}
            </CartList>

            <OrderCountContainer>
                <HeadingTotal>
                    Order Total: <AmountText>Rs {cartStoreModel.totalPrice}/-</AmountText>
                </HeadingTotal>
                <ItemsCountPara>{cartStoreModel.totalItems} Items in Cart</ItemsCountPara>
                <CheckoutButton>CheckOut</CheckoutButton>
            </OrderCountContainer>
        </div>
    )
})

export default CartListView
