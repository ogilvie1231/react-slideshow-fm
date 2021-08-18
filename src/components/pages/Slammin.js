import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/slammin-logo.png";

class Slammin extends Component {
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
                  <h3 className=" flavor-name">Blue</h3>
                  <div className="line"></div>
                  <p className="text">
                    A sugary rush of blue raspberry and ripe blueberries.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Green</h3>
                  <div className="line"></div>
                  <p className="text">
                    A tart and sweet green apple, juicy and crisp.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pink</h3>
                  <div className="line"></div>
                  <p className="text">
                    Fresh summer slices of watermelon, juicy and crisp.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Red</h3>
                  <div className="line"></div>
                  <p className="text">
                    Sun-drenched strawberries blended into a fabulous vape juice
                    flavor.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Yellow</h3>
                  <div className="line"></div>
                  <p className="text">
                    Juicy peach slices, with a freshly picked flavor that's ripe
                    and crisp.
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">PG/VG: 40%/60%</strong>
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

export default Slammin;
