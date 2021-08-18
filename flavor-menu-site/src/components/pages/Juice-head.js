import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/juice-head-logo.png";

class JuiceHead extends Component {
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
                  <h3 className=" flavor-name">Blueberry Lemon</h3>
                  <div className="line"></div>
                  <p className="text">
                    A sun ripened blueberry inhale with a perfect lemon exhale
                    finish
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Peach</h3>
                  <div className="line"></div>
                  <p className="text">
                    A divine blend of guava fruit and peaches
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peach Pear</h3>
                  <div className="line"></div>
                  <p className="text">
                    Peaches and pears blended to perfection
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pineapple Grapefruit</h3>
                  <div className="line"></div>
                  <p className="text">
                    Pineapples and grapefruits come to life in this tart fruity
                    blend
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Strawberry Kiwi</h3>
                  <div className="line"></div>
                  <p className="text">
                    A classic combination that is even better than it sounds
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Lime</h3>
                  <div className="line"></div>
                  <p className="text">
                    An unlikely pair that works a little too well
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Blue Lemon Freeze</h3>
                  <div className="line"></div>
                  <p className="text">
                    A ripe blueberry inhale with a perfect lemon exhale finish
                    topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Guava Peach Ice</h3>
                  <div className="line"></div>
                  <p className="text">
                    A divine blend of guavas and peaches with a perfect menthol
                    blend
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Peach Pear Freeze</h3>
                  <div className="line"></div>
                  <p className="text">
                    Peaches and pears blended to perfection topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pineapple Grapefruit Freeze</h3>
                  <div className="line"></div>
                  <p className="text">
                    Pineapples and grapefruits come to life in this tart fruity
                    blend topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Straw Kiwi Freeze</h3>
                  <div className="line"></div>
                  <p className="text">
                    A classic combination that is even better than it sounds
                    topped with menthol
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Watermelon Lime Freeze</h3>
                  <div className="line"></div>
                  <p className="text">
                    An unlikely pair that works a little too well topped with
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

export default JuiceHead;
