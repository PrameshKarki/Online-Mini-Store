import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    // *You can also remove these comparison by SWITCH Statement
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + (action.item.quantity * action.item.price);

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    else if(action.type==="REMOVE"){
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id);
        const existingItem=state.items[existingCartItemIndex];
        
        const updatedTotalAmount=state.totalAmount-existingItem.price;

        let updatedItems;

        if(existingItem.quantity===1){
            updatedItems=state.items.filter(item=>item.id!==action.id);
        }else{
            const updatedItem={
                ...existingItem,
                quantity:existingItem.quantity-1
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    else if(action.type==="ORDER"){
        // *Dummy Place Order Setup
        return {
            items:[],
            totalAmount:0
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };
    const placeOrderHandler=()=>{
        // eslint-disable-next-line no-restricted-globals
       const userChoice= confirm("Do you want to place your order?");
       if(userChoice){
           dispatchCartAction({type:"ORDER"});
       }
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        placeOrder:placeOrderHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;