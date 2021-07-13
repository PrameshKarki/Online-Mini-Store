import React, { useState } from "react";

// *Import Classes
import classes from "./CSS/App.module.css";

// *Import Components
import Navigation from "./Components/Layout/Navigation";
import HeroText from "./Components/Layout/HeroText";
import HeroImage from "./Components/Layout/HeroImage";
import Summary from "./Components/Layout/Summary";
import ProductList from "./Components/Product/ProductList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
    // *Manage state to show and hide cart
    const [cartIsShown,setCartIsShown]=useState(false);

    const showCartHandler=()=>{
        setCartIsShown(true);
    }
    const hideCartHandler=()=>{
        setCartIsShown(false);
    }
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <header className={classes.header}>
                <Navigation onShowCart={showCartHandler} />
            </header>
            <main className={classes.main}>
                <div className={classes["flex-container"]}>
                    <HeroText />
                    <HeroImage />
                </div>
                <Summary />
                <ProductList />
            </main>

        </CartProvider>
    )
}

export default App;