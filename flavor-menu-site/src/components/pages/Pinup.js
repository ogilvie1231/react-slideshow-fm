import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/pinup-logo.png";

class Pinup extends Component {
  render() {
    return (
      <div>
        <header>{/* <Navbar /> */}</header>
        <body>
          <Container fluid>
            <div className="menu-div">
              <div>
                <img className="brand-logo" src={Brand} alt="pinup"></img>
              </div>
              <div>
                <img className="flavors-img" src={Flavor}></img>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Betty</h3>
                  <div className="line"></div>
                  <p className="text">
                    An amazing blend of many different fruits and a sprinkle of
                    magic. While this description is extremely vauge, we have
                    decided that Betty is a tropical blend of papaya, guava and
                    mango. We are probably missing a flavor or two. Let us know
                    what you think
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Betty Chill</h3>
                  <div className="line"></div>
                  <p className="text">Take betty and add a refreshing chill!</p>
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

export default Pinup;
