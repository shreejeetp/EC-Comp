import { React, Component } from "react"
import "./ItemCatalog.css"
import { withRouter } from "react-router"
import HorizontalNavBar from "../../components/HorizontalNavBar/HorizontalNavBar";
import ShoppingItemList from "../../components/ShoppingItemList/ShoppingItemList";
import Loading from "../Loading/Loading";

async function getItemsByItemType(itemTypeId) {
    console.log("fetching from http://localhost:8080/api/items_by_type/" + itemTypeId)
    const response = await fetch("http://localhost:8080/api/items_by_type/" + itemTypeId)
    return response.json()
}

class ItemCatalog extends Component {

    constructor(props) {
        super();
        this.state = {
            itemType: props.location.state.itemType,
            items: [],
            loading:false
        }
    }

    componentDidMount() {
        this.setState({loading:true})
        getItemsByItemType(this.state.itemType.id).then((itemData)=>{
            console.log("Fetched ItemData",itemData)
            this.setState({items:itemData})
            this.setState({loading:false})
        })
    }

    render(){
        if(this.state.loading===true){
            return(
                <Loading/>
            )
        }
        return (
            <div className="ItemCatalogDiv">
                <HorizontalNavBar itemType={this.state.itemType} />
                <ShoppingItemList items={this.state.items} global={this.props.global}/>
            </div>
        )
    }
}

export default withRouter(ItemCatalog);