import React, { useContext } from "react";

import classes from "./CSS/CartItemList.module.css";

import CartContext from "../../Store/cart-context";

import CartItem from "./CartItem";

const CartItemList = props => {
    const cartCtx = useContext(CartContext);

    const addCartItemHandler = (item) => { 
        const newItem={
            ...item,
            quantity:1
        }
        cartCtx.addItem(newItem);
    };
    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id);
     };

    return (
        <ul className={classes["cart-items-list"]}>
            {cartCtx.items.map(item => <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} onAddItem={addCartItemHandler.bind(null, item)} onRemoveItem={removeCartItemHandler.bind(null, item.id)} />)}
        </ul>
    );
}

export default CartItemList;