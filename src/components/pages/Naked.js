import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/naked-logo.png";

class Naked extends Component {
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
                  <h3 className=" flavor-name">Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Raspberry, blueberry, blackberry, menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Crisp Menthol</h3>
                  <div className="line"></div>
                  <p className="text">Crisp minty menthol</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Hawaiian Pog</h3>
                  <div className="line"></div>
                  <p className="text">Passionfruit, orange, guava</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lava Flow</h3>
                  <div className="line"></div>
                  <p className="text">Strawberry, pineapple and coconut</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Melon</h3>
                  <div className="line"></div>
                  <p className="text">
                    Cantaloupe, honey dew pineapple menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Really Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    Blueberries, blackberries and a lemon sugar glaze
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Pom</h3>
                  <div className="line"></div>
                  <p className="text">Strawberry, kiwi, pomegranate, menthol</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">American Patriot</h3>
                  <div className="line"></div>
                  <p className="text">A full bodied rich tobacco blend</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Cuban</h3>
                  <div className="line"></div>
                  <p className="text">A medium bodied caribbean blend</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Euro</h3>
                  <div className="line"></div>
                  <p className="text">A smooth light bodied tobacco</p>
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

export default Naked;
