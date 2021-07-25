import { React, Component } from "react"
import "./CreateItem.css"

class CreateItem extends Component {
    constructor(props) {
        super();
        this.state = {
            itemTypes: [],
            workingItem:null,
        }
    }

    componentDidMount(){
       fetch("http://localhost:8080/api/ItemType/all/").then((response)=>response.json()).then((itemTypes)=>{
           this.setState({itemTypes:itemTypes})
       })
    }

    loadItems=(e)=>{
        this.setState({workingItem:{name:"",description:"",itemTypeId:e.target.value,price:"",img_url:""}})
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

    handleCreateItem=()=>{
        const workingItem=this.state.workingItem
        const itemRequest=JSON.stringify({
            "name":workingItem.name,
            "description":workingItem.description,
            "img_url":workingItem.img_url,
            "price":workingItem.price,
            "itemTypeId":workingItem.itemTypeId
        })
        const requestOptions={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: itemRequest
        }

        fetch("http://localhost:8080/api/item/",requestOptions).then((response)=>response.text()).then((msg)=>{
            if(msg.slice==="Inserted Successfully!"){
                console.log("Created Successfully");
            }
        })
    }

    render() {
        return (
            <div className="form">
                <select onChange={this.loadItems}>
                    {this.state.itemTypes.map(itemType=>(
                        <option value={itemType.id}>{itemType.name}</option>
                    ))}
                </select>
                {this.state.workingItem!=null?(
                    <div className="items-form">
                        <input placeholder="name" type="text" value={this.state.workingItem.name} onChange={this.handleNameChange}/>
                        <input placeholder="description" type="textarea" value={this.state.workingItem.description} onChange={this.handleDescriptionChange}/>
                        <input placeholder="price" type="text" value={this.state.workingItem.price} onChange={this.handlePriceChange}/>
                        <input placeholder="img_url" type="text" value={this.state.workingItem.img_url} onChange={this.handleImgChange}/>
                        <button onClick={this.handleCreateItem}>Create Item!</button>
                    </div>
                ):""}
            </div>
        )
    }
}

export default CreateItem;