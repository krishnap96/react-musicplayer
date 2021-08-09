import React, { Component } from 'react'
import './App.css';
import Senorita from './components/Senorita';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mysignup from './components/Signnup';
import Home from './components/Home';
import WorldJoy from './components/WorldJoy';
import Purpose from './components/Purpose';
import Herewith from './components/Herewith';
import Reason from './components/Reason';
import Login from './components/Login';
import Scorp from './components/Scorp';
import Deluxe from './components/Deluxe';
import Filhal from './components/Filhal';
import Tumhian from './components/Tumhian';
import Pach from './components/Pach';


export default class App extends Component {
  render() {
    return (
      <>

        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" component={Mysignup} />
            <Route path="/Senorita" component={Senorita} />
            <Route path="/WorldJoy" component={WorldJoy} />
            <Route path="/Purpose" component={Purpose} />
            <Route path="/Herewith" component={Herewith} />
            <Route path='/Reason' component={Reason} />
            <Route path='/Scorpion' component={Scorp} />
            <Route path='/Deluxe' component={Deluxe} />
            <Route path='/Filhal' component={Filhal} />
            <Route path='/Tumhian' component={Tumhian} />
            <Route path='/Pach' component={Pach} />
          </Switch>
        </Router>

      </>
    );
  }
}