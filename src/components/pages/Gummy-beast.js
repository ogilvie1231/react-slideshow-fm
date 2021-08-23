import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/gummy-beast-logo.png";

class Gummy extends Component {
  render() {
    return (
      <div>
        <header>{/* <Navbar /> */}</header>
        <body>
          <Container fluid>
            <div className="menu-div">
              <div>
                <img className="brand-logo" src={Brand}></img>
              </div>
              <div>
                <img className="flavors-img" src={Flavor}></img>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blue Gummy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A Perfect Recreation of a Blue Raspberry Gummy Bear!
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Red Gummy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A Perfect Recreation of a Raspberry Gummy Bear!
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">White Gummy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A Perfect Recreation of a Pineapple Gummy Bear!
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">PG/VG: 30%/70%</strong>
                  <br />
                  <strong className="end-text">
                    Nicotine Levels: 0mg, 3mg, 6mg
                  </strong>
                  <br />
                  <strong className="end-text">$19.99 60ml</strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default Gummy;