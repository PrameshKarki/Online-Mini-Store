import React from "react";

import classes from "./CSS/ProductList.module.css";
import ProductItem from "./ProductItem";

// *Import Components
import Card from "../UI/Card";

const products = [
    {
        id: 1,
        name: "Nike Zoom KD 12",
        description: "Men's Running Shoes",
        price: 189.12
    },
    {
        id: 2,
        name: "Nike Air Max 2015",
        description: "Performance Running Shoe",
        price: 101.48
    },
    {
        id: 3,
        name: "Nike Hyperchase",
        description: "Men's Basketball Shoe",
        price: 112.32
    }
]

const ProductList = props => {
    let JSXCode;
    if (products.length > 0) {
        JSXCode = products.map(i => <ProductItem key={i.id} id={i.id} name={i.name} description={i.description} price={i.price} />);
        JSXCode = <ul>{JSXCode}</ul>
    } else {
        JSXCode = <p className={classes["no-product-message"]}>Do not have any product now!</p>
    }
    return <Card className="medium-card" id="product-list">
        {JSXCode}
    </Card>
}
export default ProductList;