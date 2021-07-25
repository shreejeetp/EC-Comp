import { React, Component } from "react"
import "./UpdateItemPage.css"

class UpdateItem extends Component {
    constructor(props) {
        super();
        this.state = {
            itemTypes: [],
            items: [],
            workingItem:null,
            updateStatus:0,
        }
    }

    componentDidMount(){
       fetch("http://localhost:8080/api/ItemType/all/").then((response)=>response.json()).then((itemTypes)=>{
           this.setState({itemTypes:itemTypes})
       })
    }

    loadItems=(e)=>{
        this.setState({updateStatus:0})
        fetch("http://localhost:8080/api/items_by_type/"+e.target.value).then((response)=>response.json()).then((items)=>{
        console.log("In update page",items,"http://localhost:8080/api/items_by_type/"+e.target.value)    
        this.setState({items:items})
        })
    }
    
    loadItemData=(e)=>{
        this.setState({updateStatus:0})
        const selectedItemId=e.target.value
        console.log("inside load item data",selectedItemId)
        let selectedItem;
        this.state.items.forEach(item=>{
            if(item.id===parseInt(selectedItemId)){
                selectedItem=item
                console.log("found item")
            }
        })

        this.setState({workingItem:selectedItem})
    }

    handleNameChange=(e)=>{
        this.setState((prevState)=>{
            return {workingItem:{...prevState.workingItem,name:e.target.value}}
        })
    }

    handleDescriptionChange=(e)=>{
        this.setState((prevState)=>{
            return {workingItem:{...prevState.workingItem,description:e.target.value}}
        })
    }

    handlePriceChange=(e)=>{
        this.setState((prevState)=>{
            return {workingItem:{...prevState.workingItem,price:e.target.value}}
        })
    }

    handleImgChange=(e)=>{
        this.setState((prevState)=>{
            return {workingItem:{...prevState.workingItem,img_url:e.target.value}}
        })
    }

    handleUpdateItem=()=>{
        this.setState({updateStatus:1})
        const workingItem=this.state.workingItem
        const itemRequest=JSON.stringify({
            "id":workingItem.id,
            "name":workingItem.name,
            "description":workingItem.description,
            "img_url":workingItem.img_url,
            "price":workingItem.price,
            "itemTypeId":workingItem.itemType.id
        })
        const requestOptions={
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: itemRequest
        }

        fetch("http://localhost:8080/api/item/",requestOptions).then((response)=>response.text()).then((msg)=>{
            if(msg.slice(0,7)==="Success"){
                console.log("Updated Successfully");
            }
        })
        this.setState({updateStatus:2})
    }

    render() {
        let labelStyle={"color":"red"}
        if(this.state.updateStatus===0){
            labelStyle={...labelStyle,visiblity:"none"}
        }
        else{
            labelStyle={...labelStyle,visiblity:"visible"}
        }
        return (
            <div className="form">
                <select onChange={this.loadItems}>
                    {this.state.itemTypes.map(itemType=>(
                        <option value={itemType.id}>{itemType.name}</option>
                    ))}
                </select>
                {this.state.items.length>0?(
                    <div className="items-selector">
                        <select onChange={this.loadItemData}>
                            {this.state.items.map(item=>(
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                ):""}
                {this.state.workingItem!=null?(
                    <div className="items-form">
                        <input type="text" value={this.state.workingItem.name} onChange={this.handleNameChange}/>
                        <input type="textarea" value={this.state.workingItem.description} onChange={this.handleDescriptionChange}/>
                        <input type="text" value={this.state.workingItem.price} onChange={this.handlePriceChange}/>
                        <input type="text" value={this.state.workingItem.img_url} onChange={this.handleImgChange}/>
                        <button onClick={this.handleUpdateItem}>Update Item!</button>
                    </div>
                ):""}
                <label style={labelStyle} value={this.state.updateStatus===2?"Update Done!":"Sending Request to Server"}/>
            </div>
        )
    }
}

export default UpdateItem;