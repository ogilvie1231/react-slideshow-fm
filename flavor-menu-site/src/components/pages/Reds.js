import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/reds-logo.png";

class Reds extends Component {
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
                  <h3 className=" flavor-name">Apple</h3>
                  <div className="line"></div>
                  <p className="text">
                    The original apple juice flavor that you have to try to
                    believe
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Grape</h3>
                  <div className="line"></div>
                  <p className="text">
                    Red apples and grapes come together in this tantalizing
                    flavor
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">A ripe watermelon and apple blend</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Apple Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    The original apple juice flavor that you have to try to
                    believe with a perfect touch of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Grape Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    Red apples and grapes come together in this tantalizing
                    flavor with a perfect touch of menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A ripe watermelon and apple blend with a perfect touch of
                    menthol
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

export default Reds;
