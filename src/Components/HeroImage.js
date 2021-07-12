import React from "react";

import heroImage from "../assets/images/hero_image.png"

import classes from "./CSS/HeroImage.module.css";


const HeroImage=props=>{
    return <div className={classes["hero-image-container"]}>
        <img src={heroImage} alt="A 3D Store"/>
    </div>

}

export default HeroImage;