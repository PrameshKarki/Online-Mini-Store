import React from "react";

import classes from "./CSS/ProductList.module.css";
import ProductItem from "./ProductItem";

// *Import Components
import Card from "../UI/Card";

const products = [
    {
        id: 1,
        title: "IPhone 12",
        description: "Most sell phone of 2021",
        price: 12.22
    },
    {
        id: 2,
        title: "IPhone 11",
        description: "Most sell phone of 2020",
        price: 12
    },
    {
        id: 3,
        title: "IPhone 10",
        description: "Most sell phone of 2019",
        price: 9
    }
]

const ProductList = props => {
    let JSXCode;
    if (products.length > 0) {
        JSXCode = products.map(i => <ProductItem key={i.id} id={i.id} title={i.title} description={i.description} price={i.price} />);
        JSXCode = <ul>{JSXCode}</ul>
    } else {
        JSXCode = <p className={classes["no-product-message"]}>Do not have any product now!</p>
    }
    return <Card className="medium-card" id="product-list">
        {JSXCode}
    </Card>
}
export default ProductList;