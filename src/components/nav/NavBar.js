import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../../assets/img/ivape-logo.png";

const NavBar = () => {
  return (
    <div className="container-div fixed">
      <Navbar  className="navBar fixed" bg="dark" expand="lg">
        <Container>
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
            <Nav className="me-auto">
              <Nav.Link className="nav-text" href="#">
                Subohm
              </Nav.Link>
              <Nav.Link className="nav-text" href="salts">
                Salts
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
