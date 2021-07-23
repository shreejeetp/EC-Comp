import React from "react"
import ShoppingTile from "../../components/Shopping-tile/Shopping-tile";
import "./Homepage.css"

function Homepage() {
    return (
        <div>
            <h1>Shop Computers Online!</h1>
            <input type="text" placeholder="Search for Computer Items here" />
            <div className="Shopping-tiles">
                <ShoppingTile itemType="Processors" />
                <ShoppingTile itemType="Processors" />
                <ShoppingTile itemType="Processors" />
                <ShoppingTile itemType="Processors" />
                <ShoppingTile itemType="Processors" />
            </div>
        </div>

    )
}

export default Homepage;