import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import history from "./utils/history.js";
import Home from "./components/home/Home";
import Salts from './components/salts/salts'
import Lost from "./components/404/404";
import {BrowserRouter, HashRouter } from "react-router-dom";
// import {Router, Route, history, Switch,Redirect,hashChange} from 'react-router-hash-history'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <BrowserRouter history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/salts" component={Salts} />
              <Route path="/flavor-menu-react/" exact component={Home} />
              <Route path="/flavor-menu-react/" component={Home} />
              <Route path={`${process.env.PUBLIC_URL}/home`} component={App}></Route>
              <Route path={`${process.env.PUBLIC_URL}/salts`} component={App}></Route>
            </Switch>
          </BrowserRouter>
        </body>
      </div>
    );
  }
}

export default App;
