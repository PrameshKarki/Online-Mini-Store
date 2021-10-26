import React from "react";

// *Import classes
import classes from "./CSS/Navigation.module.css";

// *Import Components
import CartButton from "../Cart/CartButton";



const Navigation=props=>{
    
    return(
    <nav>
        <div className={classes.navigation}>
            <div className={`${classes.logo} ${classes.navigation__item}`}>
                <h1>MyShop</h1>
            </div>
            <div className={classes["cart-btn-container"]}>
                <CartButton onClick={props.onShowCart}/>
            </div>
        </div>
    </nav>
)

}

export default Navigation;