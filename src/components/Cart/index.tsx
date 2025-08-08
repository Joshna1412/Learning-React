import React from "react";
import { observer } from "mobx-react";

import Header from "../Header";
import CartListView from "../CartListView";
import EmptyCartView from "../EmptyCartView";

import { CartContainer } from "../StyledComponents";

import { useStore } from "../../context/storeContext";

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