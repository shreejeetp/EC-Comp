import React from "react"
import "./adminPage.css"
import { useState } from "react";
import UpdateItem from "../UpdateItemPage/UpdateItemPage";
import DeleteItem from "../../components/DeleteItem/DeleteItem";
import CreateItem from "../../components/CreateItem/CreateItem";

function AdminPage(props) {

    let [page, setPage] = useState(1);

    let updateItemPage = (<UpdateItem global={props.global}/>)
    let deleteItemPage=(<DeleteItem global={props.global}/>)
    let createItemPage=(<CreateItem global={props.global}/>)
    return (
        <div className="page-bg">
            <div className="page">
                <div className="top-nav-bar">
                    <div className={`top-nav-bar-child ${page===1?"selected":""}`} onClick={()=>{setPage(1)}}>
                        <h2>Update Item</h2>
                    </div>
                    <div className={`top-nav-bar-child ${page===2?"selected":""}`} onClick={()=>{setPage(2)}}>
                        <h2>Delete Item</h2>
                    </div>
                    <div className={`top-nav-bar-child ${page===3?"selected":""}`} onClick={()=>{setPage(3)}}>
                        <h2>Create Item</h2>
                    </div>
                </div>
                <hr></hr>
                {page===1?updateItemPage:""}
                {page===2?deleteItemPage:""}
                {page===3?createItemPage:""}
            </div>
        </div>
    )
}

export default AdminPage;