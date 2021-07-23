import React from "react"
import "./Shopping-tile.css"
//import { useState } from "react";
import { withRouter } from "react-router"

function ShoppingTile(props) {
    const colors = ["#1abc9c", "#3498db", "#e74c3c", "#f1c40f", "#2c3e50"]
    const colorIndex = Math.floor(Math.random() * colors.length);
    console.log(props.itemType)
    return (
        <div>
            <div className="shopping-tile" style={{ "background-color": colors[colorIndex]}}>
                <div className="shopping-tile-img" style={{ "backgroundImage": `url(${props.itemType.img_url})` }}>
                    <div className="shopping-tile-content">
                        <h2 className="shopping-tile-text">{props.itemType.name}</h2>
                        <button onClick={()=>{props.history.push(`/items/${props.itemType.id}`)}}>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ShoppingTile);