import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import history from "./utils/history.js";
import Home from "./components/home/Home";
import Salts from "./components/salts/salts";
import Lost from "./components/404/404";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "reactstrap";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "./assets/img/ivape-logo.png";
import { Carousel } from "react-responsive-carousel";

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <div className="App">
          <body>
            <Router history={history} basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </Router>
          </body>
        </div>
      </div>
    );
  }
}

export default App;
