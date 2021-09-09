import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/verdict-logo.png";

class VerdictSalts extends Component {
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
                  <h3 className=" flavor-name">Rainbow Cookies</h3>
                  <div className="line"></div>
                  <p className="text">Rainbow sherbet infused sugar cookies</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Lime</h3>
                  <div className="line"></div>
                  <p className="text">Perfectly blended Hawaiian strawberries  and lime with a refreshingly cool finish</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lemon Tart</h3>
                  <div className="line"></div>
                  <p className="text">A zesty lemon custard baked in a flaky crust</p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Cream</h3>
                  <div className="line"></div>
                  <p className="text">Diced strawberries, vanilla cream, marshmallow and graham cracker</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pink</h3>
                  <div className="line"></div>
                  <p className="text">All your favorite pink candies blended to perfection</p>
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

export default VerdictSalts;
