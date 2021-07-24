import React from "react"
import "./Cart.css";
import { withRouter } from "react-router";

function Cart(props) {
    return (
        <div className="cart-page-container">
            <div className="cart-page">
                <div className="cart-page-title">
                    <h2>Cart</h2>
                    <hr></hr>
                </div>
                <div className="cart-item-list">
                    <div className="cart-item">
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(Cart);