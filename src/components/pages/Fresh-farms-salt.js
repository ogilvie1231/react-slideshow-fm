import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/fresh-farms-logo.png";

class FreshFarmsSalts extends Component {
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
                  <h3 className=" flavor-name">Barnyard Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Delicious strawberry and raspberry flavors mixed with ripe
                    blackberries finishing with a subtle lemon exhale to ensure
                    a refreshing vape every time
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Morning Melon</h3>
                  <div className="line"></div>
                  <p className="text">
                    A perfect blend of honey dew, watermelon, and cantaloupe
                    flavors, coupled with a hint of sweet mint
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Sour Chew</h3>
                  <div className="line"></div>
                  <p className="text">
                    A delicious blend of sour apple and grape that will make
                    your taste buds tingle with excitement
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Farm Cake</h3>
                  <div className="line"></div>
                  <p className="text">
                    An exciting take on an American classic. Ripe strawberries, a
                    flaky-golden crust that’s lighter than air.
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

export default FreshFarmsSalts;
