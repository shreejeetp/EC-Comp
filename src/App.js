import './App.css';
import Homepage from './pages/HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VerticalNavBar from './components/Vertical-nav-bar/Vertical-nav-bar';
import Login from './pages/Login/Login';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Router>
        <VerticalNavBar/>
        <Switch>
          <Route exact path="/"><Homepage/></Route>
          <Route exact path="/login"><Login/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
