import React from "react";

import classes from "./CSS/Button.module.css";
import "./CSS/Button.css";

const Button=props=>{
    return <button type={props.type || 'button'} className={`${classes.btn} ${props.className || ''}`} onClick={props.onClick}>{props.children}</button>
}

export default Button;