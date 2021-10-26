import React, { useContext } from "react";

import CartContext from "../../Store/cart-context";

import classes from "./CSS/ProductItem.module.css";
import ProductOrderForm from "./ProductOrderForm";

const ProductItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    const cardCtx = useContext(CartContext);

    const addQuantityHandler = quantity => {
        const item = {
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price
        }
        cardCtx.addItem(item);

    }
    return <li className={classes["product-item"]}>
        <div className={classes["product-details"]}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{price}</p>
        </div>
        <div className={classes["product-order-form"]}>
            <ProductOrderForm onAddQuantity={addQuantityHandler} />
        </div>
    </li>
}

export default ProductItem;