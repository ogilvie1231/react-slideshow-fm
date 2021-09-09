import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/svrf-logo.png";

class Svrf extends Component {
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
                  <h3 className=" flavor-name">Balanced</h3>
                  <div className="line"></div>
                  <p className="text">A mind blowing coconut cream</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Refreshing</h3>
                  <div className="line"></div>
                  <p className="text">
                    A blend of mangos papayas and cantaloupe that you can‘t get
                    enough of
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Satisfying</h3>
                  <div className="line"></div>
                  <p className="text">
                    A raspberry dragon fruit iced tea that leaves you satisfied
                    with every puff
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Stimulating</h3>
                  <div className="line"></div>
                  <p className="text">
                    A blend of berries topped off with lychee fruit
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Revive</h3>
                  <div className="line"></div>
                  <p className="text">
                    A brilliant concoction of blueberries and limes
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Balanced Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mind blowing coconut cream with a perfect touch of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Refreshing Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A blend of mangos papayas and cantaloupe that you can‘t get
                    enough of with a perfect touch of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Satisfying Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A raspberry dragon fruit iced tea that leaves you satisfied
                    with every puff with a perfect touch of menthol
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

export default Svrf;
