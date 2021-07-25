import { React, Component } from "react"
import "./DeleteItem.css"

class DeleteItem extends Component {
    constructor(props) {
        super();
        this.state = {
            itemTypes: [],
            items: [],
            workingItem:null,
        }
    }

    componentDidMount(){
       fetch("http://localhost:8080/api/ItemType/all/").then((response)=>response.json()).then((itemTypes)=>{
           this.setState({itemTypes:itemTypes})
       })
    }

    loadItems=(e)=>{
        fetch("http://localhost:8080/api/items_by_type/"+e.target.value).then((response)=>response.json()).then((items)=>{
        console.log("In update page",items,"http://localhost:8080/api/items_by_type/"+e.target.value)    
        this.setState({items:items})
        })
    }
    
    loadItemData=(e)=>{
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

    handleDeleteItem=()=>{
        const workingItem=this.state.workingItem
        
        const requestOptions={
            method: 'DELETE'
        }

        fetch("http://localhost:8080/api/item/"+workingItem.id,requestOptions).then((response)=>response.text()).then((msg)=>{
            if(msg.slice(0,4)==="true"){
                console.log("Deleted Successfully");
            }
        })
        this.setState({updateStatus:2})
    }

    render() {
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
                        <label onChange={this.handleNameChange}>{this.state.workingItem.name}</label>
                        <label onChange={this.handleDescriptionChange}>{this.state.workingItem.description}</label>
                        <label onChange={this.handlePriceChange}>{this.state.workingItem.price}</label>
                        <label onChange={this.handleImgChange}>{this.state.workingItem.img_url}</label>
                        <button onClick={this.handleDeleteItem}>DeleteItem!</button>
                    </div>
                ):""}
            </div>
        )
    }
}

export default DeleteItem;