import React from "react";

import classes from "./CSS/HeroImage.module.css";


const HeroImage=props=>{
    return <div className={classes["hero-image-container"]}>
        <img src="/assets/images/hero_image.png" alt="A 3D Store"/>
    </div>

}

export default HeroImage;