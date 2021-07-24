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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <VerticalNavBar />
          <div className="MainApp">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route exact path="/login"><Login /></Route>
              <Route path="/items/"><ItemCatalog /></Route>
              <Route path="/cart/"><Cart /></Route>

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
