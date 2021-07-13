import React,{useContext} from "react";

import classes from "./CSS/CartButton.module.css";

import CartIcon from "../UI/CartIcon";

// *Import Context
import CartContext from "../../store/cart-context";

const CartButton=props=>{
    const cartCtx=useContext(CartContext);
    const numberOfCartItems=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber+item.quantity
    },0)
    return(
        <button className={classes["cart-btn"]} onClick={props.onClick}>
            <span><CartIcon/></span>
            <span>Your Cart</span>
            <span>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;