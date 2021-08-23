import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import history from "./utils/history.js";
import Home from "./components/home/Home";
import Menu from "./components/menu/menu";
import Salts from './components/salts/salts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/salts" component={Salts} />
              <Route path="/flavor-menu-react/" exact component={Home} />
              <Route path="/flavor-menu-react/" component={Home} />
              <Route path="/flavor-menu-react/home" component={Home} />
              <Route path="https://ogilvie1231.github.io/flavor-menu-react/salts" component={Salts} />
            </Switch>
          </Router>
        </body>
      </div>
    );
  }
}

export default App;
