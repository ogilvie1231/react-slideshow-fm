import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from "../../assets/img/ivape-logo.png";
import "./menu.css";
import Flavor from "../../assets/img/flavors.png";
import { Container } from "react-bootstrap";
import Brand from "../../assets/logos/fresh-pressed-logo.png";

class FreshPressed extends Component {
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
                  <h3 className=" flavor-name">Fruit Finale</h3>
                  <div className="line"></div>
                  <p className="text">
                    A fantastic infusion of juicy apples, ripe pears and amazon
                    forest fruits
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Honeycomb Berry</h3>
                  <div className="line"></div>
                  <p className="text">
                    A combination of tangy limeade coupled with tropical berries
                    touched with a hint of raw honey
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Lava Luau</h3>
                  <div className="line"></div>
                  <p className="text">
                    A Hawaiian blend of watermelon, kiwi, and mixed berries
                    frozen to a teeth chattering frost
                  </p>
                </div>

                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Pink Melon</h3>
                  <div className="line"></div>
                  {/* <hr className='line' /> */}
                  <p className="text">
                    Watermelon, honeydew and peaches blended into absolute
                    perfection
                  </p>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className=" flavor-name">Sugar Tantrum</h3>
                  <div className="line"></div>
                  <p className="text">
                    Whipped custard, vanilla beans and crunchy pecans into a
                    sugary masterpiece
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

export default FreshPressed;
