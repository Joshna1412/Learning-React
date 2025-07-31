import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import CartContext from "../CartContext";
import React, { use } from "react";
import { CartContainer } from "../styledComponents";

const Cart: React.FC = () => {
    const value = use(CartContext);
    const { cartList } = value;
    const showEmptyView = cartList.length === 0;

    return (
        <>
            <Header />
            <CartContainer>
                {showEmptyView ? (
                    <EmptyCartView />
                ) : (
                    <div>
                        <CartListView />
                    </div>
                )}
            </CartContainer>
        </>
    );
};

export default Cart;