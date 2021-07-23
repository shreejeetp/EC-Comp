import React from "react"
import "./Shopping-tile.css"

function ShoppingTile(props) {
    return (
        <div>
            <div className="shopping-tile">
                <div>
                    <h2>{props.itemType}</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingTile;