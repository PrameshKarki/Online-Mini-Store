import React,{useContext,useEffect,useState} from "react";

import classes from "./CSS/CartButton.module.css";

import CartIcon from "../UI/CartIcon";

// *Import Context
import CartContext from "../../store/cart-context";

const CartButton=props=>{
    const [isButtonHighlighted,setIsButtonHighlighted]=useState(false);

    const cartCtx=useContext(CartContext);
    const {items}=cartCtx;

    const numberOfCartItems=items.reduce((currentNumber,item)=>{
        return currentNumber+item.quantity
    },0)

    const btnClasses=`${classes["cart-btn"]} ${isButtonHighlighted ? classes.bump :''}`;

    useEffect(()=>{
        if(items.length===0)
            return;
        setIsButtonHighlighted(true);

        const timer=setTimeout(()=>{
            setIsButtonHighlighted(false);
        },300);

        return ()=>{
            clearTimeout(timer);
        }
    },[items]);

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span><CartIcon/></span>
            <span>Your Cart</span>
            <span>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;