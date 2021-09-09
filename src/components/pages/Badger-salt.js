import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/badger-hill-logo.png";
// import Brand from 'https://www.fillmurray.com/g/200/300'

class BadgerSalts extends Component {
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
                  <h3 className=" flavor-name">American Way</h3>
                  <div className="line"></div>
                  <p className="text">
                    American Way uses a blend of 3 classic tobacco styles
                    normally found in the Virginia-Carolina tobacco belt, this
                    tobacco vape juice has a fantastic array of earth, spice,
                    leather, a smooth finish, and a touch of caramel sweetness
                    that lingers on the tongue
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Brown Sugar</h3>
                  <div className="line"></div>
                  <p className="text">
                    Our Brown Sugar consists of our proprietary tobacco blend
                    along with equal parts light and dark brown sugar giving you
                    a deep, rich, tobacco and sweet molasses flavor
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Classic</h3>
                  <div className="line"></div>
                  <p className="text">
                    For some people, the taste of an actual cigarette is all too
                    familiar and may make it hard to switch from. Our goal with
                    ‘Classic” was to recreate the taste of an actual cigarette.
                    Users should expect the familiar taste of ash along with
                    light roasted spices, and a touch of sweet cocoa
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Menthol</h3>
                  <div className="line"></div>
                  <p className="text">
                    Uses our blend of 3 tobacco styles normally found in the
                    Virginia-Carolina tobacco belt, this menthol vape juice has
                    a fantastic array of earth, spice, leather, and a
                    refreshingly cool menthol finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Milk & Honey</h3>
                  <div className="line"></div>
                  <p className="text">
                    Milk & Honey is a beautiful harmony of our best tobacco
                    blend then layered in warm honey and a deliciously sweet
                    milky finish. The is a heavenly blend that will make you
                    taste buds say thank you
                  </p>
                </div>
              </div>
              <div className="row text end">
                <p>

                  <strong className="end-text">
                    24mg Nic Salt
                  </strong>
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

export default BadgerSalts;
