import { React, Component } from "react"
import ShoppingTile from "../../components/Shopping-tile/Shopping-tile";
import "./Homepage.css"
import LoadingPage from "../Loading/Loading"

async function fetchItemType() {
    const response = await fetch("http://localhost:8080/api/ItemType/all/")
    return await response.json();
}

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            itemType: {
                loading: false,
                value: []
            }
        }
    }
    componentDidMount() {
        let data1
        this.setState({ itemType: { ...this.state.itemType, loading: true } })
        fetchItemType().then(jsonData => {
            data1 = jsonData
            this.setState({ itemType: { ...this.state.itemType, value: data1 } })
            if (data1 != null) {
                this.setState({ itemType: { ...this.state.itemType, loading: false } })
            }
        })


    }

    render() {
        if (this.state.itemType.loading === true) {
            return (
                <LoadingPage/>
            )
        }
        const itemTypes=this.state.itemType.value
        return (
            <div className="flex-column-cross-center">
                <h1>Shop Computers Online!</h1>
                <input type="text" placeholder="Search for Computer Items here" />
                <div className="Shopping-tiles">
                    {itemTypes.map((itemType)=>(<ShoppingTile key={itemType.id} itemType={itemType}/>))}
                </div>
            </div>

        )
    }
}

export default Homepage;