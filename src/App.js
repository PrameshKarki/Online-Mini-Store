import React from "react";

// *Import Classes
import classes from "./CSS/App.module.css";

// *Import Components
import Navigation from "./Components/Navigation";
import HeroText from "./Components/HeroText";
import HeroImage from "./Components/HeroImage";
import Summary from "./Components/Summary";
import ProductList from "./Components/ProductList";

const App=()=>{
return(
    <>
    <header className={classes.header}>
        <Navigation/>
    </header>
    <main className={classes.main}>
        <div className={classes["flex-container"]}>
        <HeroText/>
        <HeroImage/>
        </div>
        <Summary/>
        <ProductList/>
    </main>

    </>
) 
}

export default App;