import { useContext, useMemo } from 'react'
import CartContext from '../CartContext'
import CartItem from '../CartItem'
import './index.css'

const CartListView = () => {
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
            <div className="cart-header">
                <h1>My Cart</h1>
                <button className="remove-button" onClick={onDeleteAll}>
                    Remove All
                </button>
            </div>
            <ul className="cart-list">
                {cartList.map(eachCartItem => (
                    <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
                ))}
            </ul>
            <div className="order-count-container">
                <h2 className="heading-total">
                    Order Total: <span className="amount">Rs {totalAmount}/-</span>
                </h2>
                <p className="items-count-para">{cartList.length} Items in Cart</p>
                <button className="check-out-button">CheckOut</button>
            </div>
        </div>
    )
}

export default CartListView
