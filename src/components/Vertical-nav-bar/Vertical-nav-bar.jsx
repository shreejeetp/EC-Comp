import React from "react"
import "./Vertical-Nav-Bar.css"
import NavBarTile from "../Nav-bar-Tile/Nav-Bar-Tile";
import HomeSvg from "../../svg/home.svg"
import UserSvg from "../../svg/user.svg"
import AdminSvg from "../../svg/admin.svg"
import CartSvg from "../../svg/cart.svg"



function VerticalNavBar(){
    return(
        <div className="v-nav-bar">
            <NavBarTile bnd={{txt:"Home",link:"/",icon:HomeSvg}}/>
            <NavBarTile bnd={{txt:"User",link:"/login",icon:UserSvg}}/>
            <NavBarTile bnd={{txt:"Cart",link:"/cart",icon:CartSvg}}/>
            <NavBarTile bnd={{txt:"Admin",link:"/admin",icon:AdminSvg}}/>
        </div>
    )
}

export default VerticalNavBar;