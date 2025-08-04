import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";
import React, { use } from "react";
import { CartContainer } from "../styledComponents";
import { observer } from "mobx-react";
import { useStore } from "../../context/storeContext";
// import { cartStore } from "../CartContext/CartStore";

const Cart: React.FC = observer(() => {
    const { cartStoreModel } = useStore()

    const showEmptyView = cartStoreModel.totalItems == 0;

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
});

export default Cart;