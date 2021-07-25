import React from "react"
import "./Cart.css";
import { withRouter } from "react-router";

function Cart(props) {

    let cart = props.global.state.cart
    /* let isSigned=props.global.state.login.isSigned
     */console.log("in cart page",cart)
   /*  const userNotSignedIn=(
    <div>

    </div>
    ) */
    return (
        <div className="cart-page-container">
            <div className="cart-page">
                <div className="cart-page-title">
                    <h2>Cart</h2>
                    <hr></hr>
                </div>
                <div className="cart-item-list">
                    {cart.map((cartItem,i) => (
                        <div className="cart-item">
                            <p className="cart-item-field">{i+1}</p>
                            <p className="cart-item-field">{cartItem.itemId}</p>
                            <p className="cart-item-field">{cartItem.itemName}</p>
                            <p className="cart-item-field">₹{cartItem.price}/-</p>
                            <button onClick={()=>props.global.func.deleteFromCart(i)}>Remove Item</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default withRouter(Cart);