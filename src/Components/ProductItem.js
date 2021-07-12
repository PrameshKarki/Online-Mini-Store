import React from "react";

import classes from "./CSS/ProductItem.module.css";
import Button from "../UI/Button";


const ProductItem = props => {
    return <li className={classes["product-item"]}>
            <div className={classes["product-details"]}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>{props.price.toFixed(2)}</p>
            </div>
            <div className={classes["product-order-form"]}>
                <form>
                    <label htmlFor="qty">Quantity:</label>
                    <input type="number" name="quantity" id="qty" min="1" max="10" step="1" value="1"/>
                    <Button className="add-btn">Add</Button>
                </form>
        </div>
    </li>
}

export default ProductItem;