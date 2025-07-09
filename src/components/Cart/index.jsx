import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import CartContext from "../CartContext";
import "./index.css";
import { use } from "react";

const Cart = () => {
    const value = use(CartContext);
    const { cartList } = value;
    const showEmptyView = cartList.length === 0;

    return (
        <>
            <Header />
            <div className="cart-container">
                {showEmptyView ? (
                    <EmptyCartView />
                ) : (
                    <div className="cart-content-container">
                        <CartListView />
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;