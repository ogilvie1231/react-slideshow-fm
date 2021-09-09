import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/time-bomb-logo.png";

class TimeBomb extends Component {
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
                  <h3 className=" flavor-name">Fuse</h3>
                  <div className="line"></div>
                  <p className="text">A strawberry watermelon blend</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pixy</h3>
                  <div className="line"></div>
                  <p className="text">Just like a grape pixy stick</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pixy Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Just like a grape pixy stick with a soothing menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">TnT</h3>
                  <div className="line"></div>
                  <p className="text">
                    An amazing mix of peaches apples and strawberries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">TnT Ice</h3>
                  <div className="line"></div>
                  <p className="text">TNT with a splash of soothing menthol</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Maniac</h3>
                  <div className="line"></div>
                  <p className="text">
                    A vanilla cupcake with buttercream frosting
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Maniac Blue</h3>
                  <div className="line"></div>
                  <p className="text">
                    A vanilla cupcake with buttercream frosting topped with
                    blueberries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Sid</h3>
                  <div className="line"></div>
                  <p className="text">
                    Raspberries and grapes mixed to perfection
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Joker</h3>
                  <div className="line"></div>
                  <p className="text">A blue raspberry that you have to try</p>
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

export default TimeBomb;
