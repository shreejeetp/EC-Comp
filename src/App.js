import './App.css';
import Homepage from './pages/HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VerticalNavBar from './components/Vertical-nav-bar/Vertical-nav-bar';
import Login from './pages/Login/Login';
import ItemCatalog from './pages/ItemCatalog/ItemCatalog';
import Cart from './pages/Cart/Cart';
import { Component } from 'react';
import AdminPage from './pages/AdminPage/adminPage';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      login: {
        isLogin: false,
        user: "",
        role: null
      }
    }

  }
  login = (requestUserName, requestPassword, requestRole) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "name": requestUserName, "password": requestPassword, "role": requestRole })
    };

    console.log("request options:", requestOptions)
    fetch('http://localhost:8080/api/authenticate/', requestOptions).then((response) => response.json()).then((result) => {
      if (result === true) {
        this.setState({ login: { isLogin: true, user: requestUserName, role: requestRole } })
        console.log("Login Successful!")
      }
      else {
        console.log("Login Failed!", result)
      }
    })
  }

  logout = () => {
    console.log("In Logout func")
    this.setState({ login: { ...this.state.login, isLogin: false } })
    console.log(this.state)
  }

  addToCart = ( itemId,itemName,price) => {
    let cartItem = { itemName: itemName, itemId: itemId, price: price }
    this.setState((prevState) => ({ cart: [...prevState.cart, cartItem] }))
    console.log("in addtocart",this.state)
  }

  deleteFromCart = (itemNo) => {
    let changedCart = [...this.state.cart]
    if ((itemNo >= 0) && (itemNo < changedCart.length)) {
      changedCart.splice(itemNo, 1)
      this.setState({ cart: changedCart })
    }
  }

  render() {

    const globalStateFunc = { loginFunc: this.login, logoutFunc: this.logout ,addToCart:this.addToCart,deleteFromCart:this.deleteFromCart}
    return (
      <div className="App">
        <Router>
          <VerticalNavBar />
          <div className="MainApp">
            <Switch>
              <Route exact path="/"><Homepage global={{state:this.state,func:globalStateFunc}}/></Route>
              <Route exact path="/login"><Login global={{state:this.state,func:globalStateFunc}}/></Route>
              <Route path="/items/"><ItemCatalog global={{state:this.state,func:globalStateFunc}}/></Route>
              <Route path="/cart/"><Cart global={{state:this.state,func:globalStateFunc}}/></Route>
              <Route path="/admin/"><AdminPage global={{state:this.state,func:globalStateFunc}}/></Route>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
