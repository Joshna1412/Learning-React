import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext } from 'react'
import CartContext from '../CartContext'
import './index.css'

const CartItem = props => {
    const { cartItemDetails } = props
    const { id, title, brand, quantity, price, imageUrl } = cartItemDetails
    const { addCartItem, deleteCartItem } = useContext(CartContext)

    const onIncrement = () => {
        const updatedItem = { ...cartItemDetails, quantity: 1 }
        addCartItem(updatedItem)
    }

    const onDecrement = () => {
        if (quantity > 1) {
            const updatedItem = { ...cartItemDetails, quantity: -1 }
            addCartItem(updatedItem)
        } else {
            deleteCartItem(id)
        }
    }

    const onDelete = () => {
        deleteCartItem(id)
    }

    return (
        <li className="cart-item">
            <img className="cart-product-image" src={imageUrl} alt={title} />
            <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                    <p className="cart-product-title">{title}</p>
                    <p className="cart-product-brand">by {brand}</p>
                </div>
                <div className="cart-quantity-container">
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onDecrement}
                        data-testid="decrement"
                    >
                        <BsDashSquare color="#52606D" size={12} />
                    </button>
                    <p className="cart-quantity" data-testid="item-quantity">{quantity}</p>
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onIncrement}
                        data-testid="increment"
                    >
                        <BsPlusSquare color="#52606D" size={12} />
                    </button>
                </div>
                <div className="total-price-delete-container">
                    <p className="cart-total-price">Rs {price * quantity}/-</p>
                </div>
            </div>
            <button className="delete-button" type="button" onClick={onDelete} data-testid="remove">
                <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
        </li>
    )
}

export default CartItem
