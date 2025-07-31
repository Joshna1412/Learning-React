import React, { useContext, useMemo } from 'react'
import CartContext from '../CartContext'
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

const CartListView: React.FC = () => {
    const { cartList, deleteCartItem } = useContext(CartContext)

    const onDeleteAll = () => {
        cartList.forEach(each => {
            deleteCartItem(each.id)
        })
    }

    const totalAmount = useMemo(() => {
        return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }, [cartList])

    return (
        <div>
            <CartHeader>
                <h1>My Cart</h1>
                <RemoveAllButton onClick={onDeleteAll}>Remove All</RemoveAllButton>
            </CartHeader>
            <CartList>
                {cartList.map(eachCartItem => (
                    <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
                ))}
            </CartList>
            <OrderCountContainer>
                <HeadingTotal>
                    Order Total: <AmountText>Rs {totalAmount}/-</AmountText>
                </HeadingTotal>
                <ItemsCountPara>{cartList.length} Items in Cart</ItemsCountPara>
                <CheckoutButton>CheckOut</CheckoutButton>
            </OrderCountContainer>
        </div>
    )
}

export default CartListView
