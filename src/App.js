import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
// import NavBar from "./components/nav/NavBar";
import history from "./utils/history.js";
import Home from "./components/home/Home";
import Salts from "./components/salts/salts";
import Lost from "./components/404/404";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "reactstrap";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "./assets/img/ivape-logo.png";

class App extends Component {
  state = {
    isActive: true,
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };

  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  render() {
    if (this.state.isActive) {
      return (
        <div>
          <header>
            <Navbar className="navBar fixed" bg="dark" expand="lg">
              {/* <Container> */}
                <Navbar.Brand href="#home">
                  <img
                    id="iVape-logo"
                    className="iVape-logo"
                    src={Logo}
                    alt="iVape-logo"
                    srcset=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  {/* <Nav className="me-auto"> */}
                  <Nav.Link
                    className="nav-text"
                    id="navBtn"
                    onClick={this.handleHide}
                  >
                    Salts
                  </Nav.Link>

                  {/* </Nav> */}
                </Navbar.Collapse>
              {/* </Container> */}
            </Navbar>
          </header>
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
    } else if (!this.state.isActive) {
      return (
        <div>
          
            <header>
              <Navbar className="navBar fixed" bg="dark" expand="lg">
                {/* <Container> */}
                  <Navbar.Brand href="#home">
                    <img
                      id="iVape-logo"
                      className="iVape-logo"
                      src={Logo}
                      alt="iVape-logo"
                      srcset=""
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link
                      className="nav-text"
                      id="navBtn"
                      onClick={this.handleShow}
                    >
                      Sub Ohm Flavors
                    </Nav.Link>
                  </Navbar.Collapse>
                {/* </Container> */}
              </Navbar>
            </header>
            <div  className="App">
            <body>
              <Router history={history} basename={process.env.PUBLIC_URL}>
                <Switch>
                  <Route path="/" exact component={Salts} />
                </Switch>
              </Router>
            </body>
          </div>
        </div>
      );
    }
  }
}

export default App;
