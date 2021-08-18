import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/lyf-logo.png";

class Lyf extends Component {
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
                  <h3 className=" flavor-name">Aloha Fusion</h3>
                  <div className="line"></div>
                  <p className="text">
                    A fusion of tropical fruits that is sure to satisfy
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Alpine Melon</h3>
                  <div className="line"></div>
                  <p className="text">
                    Strawberries and melons blended into perfection.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Berry Bliss</h3>
                  <div className="line"></div>
                  <p className="text">
                    Berries, berries and more berries… not to mention the
                    berries
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Citrus Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A refreshing citrus topped with a perfect note of menthol
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">PG/VG: 60%/70%</strong>
                  <br />
                  <strong className="end-text">
                    Nicotine Levels: 0mg, 3mg
                  </strong>
                  <br />
                  <strong className="end-text">$24.99 100ml</strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default Lyf;
