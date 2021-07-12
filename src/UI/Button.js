import React from "react";

import classes from "./CSS/Button.module.css";
import "./CSS/Button.css";

const Button=props=>{
    return <button type={props.type} className={`${classes.btn} ${props.className || ''}`}>{props.children}</button>
}

export default Button;