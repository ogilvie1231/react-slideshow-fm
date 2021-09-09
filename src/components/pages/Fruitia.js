import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/fruitia-logo.png";

class Fruitia extends Component {
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
                  <h3 className=" flavor-name">Apple Kiwi Crush</h3>
                  <div className="line"></div>
                  <p className="text">
                    Apples and kiwis have never been this good
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Banana Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A perfectly balanced banana flavor topped with a smooth
                    menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blood Orange Cactus Cooler</h3>
                  <div className="line"></div>
                  <p className="text">
                    A summer combination that will leave you wanting more every
                    time
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Passion Guava Punch</h3>
                  <div className="line"></div>
                  <p className="text">
                    A remarkable summer time blend of passionfruits and guavas
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pineapple Citrus Twist</h3>
                  <div className="line"></div>
                  <p className="text">A tropical pineapple citrus blend</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Coconut Refresher</h3>
                  <div className="line"></div>
                  <p className="text">
                    A tigers blood like drink. Mixing ripe strawberries and
                    delicious coconuts
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Sweet Peach Soda</h3>
                  <div className="line"></div>
                  <p className="text">
                    Crisp, sparkling soda blended with ripe sweet peaches
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

export default Fruitia;
