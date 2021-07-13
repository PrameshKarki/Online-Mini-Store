import React,{useRef,useState} from "react";

import Button from "../UI/Button";

const ProductOrderForm = props => {
    // *Manage State for invalid quantity
    const inputRef=useRef();
    const [isValidInput,setIsValidInput]=useState(true);

    const formSubmitHandler=event=>{
        event.preventDefault();
        
        const quantity=inputRef.current.value;
        const quantityValue=+quantity;
        if(quantity.trim().length===0 || quantityValue<0 || quantityValue>10){
            setIsValidInput(false);
            return;
        }else{
            props.onAddQuantity(quantityValue);
        }
        
    }

    return (
    <form onSubmit={formSubmitHandler}>
        <label htmlFor="qty">Quantity:</label>
        <input type="number" className={isValidInput ? '' :'invalid'} ref={inputRef} name="quantity" id="qty" min="1" max="10" step="1" defaultValue="1" />
        <Button type="submit" className="add-btn">+ Add</Button>
    </form>);
}

export default ProductOrderForm;