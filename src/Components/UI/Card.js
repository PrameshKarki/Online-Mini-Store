import React from "react";

import classes from "./CSS/Card.module.css";
import "./CSS/Card.css";
const Card=props=>{
    return <div className={`${classes.card} ${props.className || ''}`} id={props.id || ''}>{props.children}</div>
}

export default Card;