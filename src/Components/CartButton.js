import React from "react";

import classes from "./CSS/CartButton.module.css";

import CartIcon from "../UI/CartIcon";

const CartButton=props=>{
    return(
        <button className={classes["cart-btn"]}>
            <span><CartIcon/></span>
            <span>Your Cart</span>
            <span>0</span>
        </button>
    )
}

export default CartButton;