import React from "react"
import "./Nav-Bar-Tile.css"
import { withRouter } from "react-router"

function NavBarTile(props){
    return(
    
        <div className={`Nav-Bar-Tile ${props.bnd.link===props.location.pathname?"selected-tile":""}`} onClick={()=>{props.history.push(props.bnd.link)}}>
            {<img className="Nav-Bar-Tile-Img" src={props.bnd.icon} alt="img not found"/>}
            <p className="Nav-Bar-Tile-Text">{props.bnd.txt}</p>
        </div>
    )
}

export default withRouter(NavBarTile);