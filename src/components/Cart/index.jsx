import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import CartContext from "../CartContext";
import { use } from "react";
import { CartContainer } from "../styledComponents";

const Cart = () => {
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