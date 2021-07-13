import React from "react";

import classes from "./CSS/CartItem.module.css";

import Button from "../UI/Button";

const CartItem=props=>{
   
    const price=props.price.toFixed(2);
    return <li className={classes["cart-item"]}>
            <div className={classes.details}>
                <h3>{props.name}</h3>
                <div>
                    <span className={classes.price}>${price}</span>
                    <span className={classes.quantity}>x {props.quantity}</span>
                </div>
            </div>
            <div className={classes.controls}>
                <Button className="outline-btn" onClick={props.onRemoveItem}>-</Button>
                <Button className="outline-btn" onClick={props.onAddItem}>+</Button>
            </div>
    </li>;
}

export default CartItem;