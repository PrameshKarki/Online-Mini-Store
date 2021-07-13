import React from "react";

import classes from "./CSS/HeroText.module.css";

import Button from "../UI/Button";

import NationalFlagOfNepal from "../../assets/images/flag.gif";

const HeroText=props=>{
    return (
        <div className={classes["hero-text-container"]}>
            <h1>Order what you want!</h1>
            <p>We are <span>most trusted</span> online store of Nepal <span><img src={NationalFlagOfNepal} alt="National Flag Of Nepal"/></span></p>
            <Button className="hero-btn">Order Now</Button>
        </div>
    )

}

export default HeroText;