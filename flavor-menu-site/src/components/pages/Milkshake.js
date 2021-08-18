import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/milkshake-logo.png";

class Milkshake extends Component {
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
                  <h3 className=" flavor-name">Bomberry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mix of all of your favorite berries which are the shades
                    of blue, add a little condensed milk with our signature
                    vanilla shake base, toss all the ingredients together in a
                    blender, and voila
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Breezy</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mouthwatering mixture of fresh strawberries with a scoop
                    of vanilla ice cream are blended together for an
                    unforgettable e-liquid.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Shammy</h3>
                  <div className="line"></div>
                  <p className="text">
                    Vanilla bean milkshake gets an upgrade with a lick of mint
                    for a cool and sweet flavor.
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

export default Milkshake;
