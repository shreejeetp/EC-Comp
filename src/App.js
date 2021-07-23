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

function App() {
  
  return (
    <div className="App">
      <Router>
        <VerticalNavBar/>
        <Switch>
          <Route exact path="/"><Homepage/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route path="/items/"><ItemCatalog/></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
