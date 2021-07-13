import React,{useContext} from "react";

import classes from "./CSS/CartItemList.module.css";

import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";

const CartItemList = props => {
    const cartCtx=useContext(CartContext);

    const addCartItemHandler=()=>{};
    const removeCartItemHandler=()=>{};

    return (
        <ul className={classes["cart-items-list"]}>
            {cartCtx.items.map(item=><CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} onAddItem={addCartItemHandler} onRemoveItem={removeCartItemHandler}/>)}
        </ul>
    );
}

export default CartItemList;