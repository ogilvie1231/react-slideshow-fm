import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/burst-logo.png";

class BurstSalts extends Component {
  render() {
    return (
      <div>
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
                  <h3 className=" flavor-name">Apple Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">
                    An apple watermelon combination that you have to try to
                    believe
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Dragonfruit</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mix of dragon fruit and guava that will leave your taste
                    buds in nirvana
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peach Raspberry</h3>
                  <div className="line"></div>
                  <p className="text">A peach raspberry pairing for the ages</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">
                    A strawberry Kiwi Blend that is everyone‘s favorite color in
                    the pack.
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>
                  <strong className="end-text">24mg Nic Salt</strong>
                  <br />
                  <strong className="end-text">$11.99 15ml</strong>
                </p>
              </div>
            </div>
          </Container>
        </body>
      </div>
    );
  }
}

export default BurstSalts;
