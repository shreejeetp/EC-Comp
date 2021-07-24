import React from "react"
import "./ShoppingItem.css"

function ShoppingItem(props) {
    return (
        <div className="shopping-item">
            <img className="shopping-item-img" src={props.item.img_url} alt="prdct-img" />
            <div className="shoppoing-item-content">
                <h2>{props.item.name}</h2>
                <hr />
                <p>{props.item.description}</p>
            </div>
            <div className="shopping-item-price">
                <p className>{`₹${props.item.price}/-`}</p>
                <button>Add to Cart!</button>
            </div>
        </div>
    )
}

export default ShoppingItem;