import React, { Component } from "react";
import {Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import history from "./utils/history.js";
import Home from "./components/home/Home";
import Salts from './components/salts/salts'
import Lost from "./components/404/404";
import {BrowserRouter as Router, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <Router history={history} basename={process.env.PUBLIC_URL}>  
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/salts" component={Salts} />
              <Route path="/flavor-menu-react/home" exact component={Home} />
              <Route path="/flavor-menu-react/salts" component={Salts} />
              <Route path={`${process.env.PUBLIC_URL}/home`} component={Home}></Route>
              <Route path={`${process.env.PUBLIC_URL}/salts`} component={Salts}></Route>
            </Switch>
          </Router>
        </body>
      </div>
    );
  }
}

export default App;
