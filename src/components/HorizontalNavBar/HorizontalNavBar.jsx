import React from "react"
import "./HorizontalNavBar.css"
import { withRouter } from "react-router"
import ItemSvg from "../../svg/item-icn.svg"

function HorizontalNavBar(props) {
    return (
        <div className="horizontal-nav-bar">
            <img className="first-nav-bar nav-bar-icn" src={ItemSvg} alt="itm-icn"/>
            <h2 className="nav-bar-comp">{props.itemType.name}</h2>
        </div>
    )
}

export default withRouter(HorizontalNavBar);