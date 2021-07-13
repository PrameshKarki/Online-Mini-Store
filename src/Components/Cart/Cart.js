import React,{useContext} from "react";

import classes from "./CSS/Cart.module.css";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItemList from "./CartItemList";

const Cart = props => {
    const cartCtx=useContext(CartContext);
    const totalAmount=cartCtx.totalAmount.toFixed(2);
    const hasItems=cartCtx.items.length>0;
    return (
        <Modal onClose={props.onClose}>
            <CartItemList />
            <div className={classes["total-amount"]}>
                <span>Total Amount</span>
                 <span>${totalAmount}</span>
            </div>
            <div className={classes["actions-container"]}>
                {hasItems && <Button>Order</Button>}
                <Button className="outline-btn" onClick={props.onClose}>Close</Button>
            </div>
        </Modal>
    )

}
export default Cart;