import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/cali-grown-logo.png";

class Cali extends Component {
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
                  <h3 className=" flavor-name">Grizzly Apple</h3>
                  <div className="line"></div>
                  <p className="text">A perfectly sweet red apple</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Napa Nectar</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mango, peach & pineapple blend that we can't describe, you
                    just have to try it
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Wavy Watermelon</h3>
                  <div className="line"></div>
                  <p className="text">A Juicy candied watermelon</p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Grizzly Apple Cool</h3>
                  <div className="line"></div>
                  <p className="text">
                    A perfectly sweet red apple with the perfect touch of
                    menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Napa Nectar Cool</h3>
                  <div className="line"></div>
                  <p className="text">
                    A mango, peach & pineapple blend with a perfect touch of
                    menthol that we can't describe, you just have to try it
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Cool</h3>
                  <div className="line"></div>
                  <p className="text">
                    A Juicy candied watermelon with a perfect touch of menthol
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

export default Cali;
