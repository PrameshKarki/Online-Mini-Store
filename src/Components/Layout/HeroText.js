import React from "react";

import classes from "./CSS/HeroText.module.css";

import NationalFlagOfNepal from "../../assets/images/flag.gif";

const HeroText=props=>{
    return (
        <div className={classes["hero-text-container"]}>
            <h1>Order what you want!</h1>
            <p>We are <span>most trusted</span> online store of Nepal <span><img src={NationalFlagOfNepal} alt="National Flag Of Nepal"/></span></p>
            <a className={classes["hero-btn"]} href="#product-list" >Order Now</a>
        </div>
    )

}

export default HeroText;