import React from "react"
import ShoppingItem from "../ShoppingItem/ShoppingItem"
import "./ShoppingItemList.css"

function ShoppingItemList(props) {
    return (
        <div className="shopping-list">
           {props.items.map((item)=>(
               <ShoppingItem key={item.id} item={item}/>
           ))}
        </div>
    )
}

export default ShoppingItemList;