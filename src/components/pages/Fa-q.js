import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/fa-q-logo.png'

class Faq extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <Navbar /> */}
                </header>
                <body>
                    <Container fluid>
                   <div className="menu-div">
                       <div>
                       <img className='brand-logo' src={Brand}></img>
                       </div>
                       <div>
                           <img className='flavors-img' src={Flavor}></img>
                       </div>
                        <div className="row">
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Funky Monkey</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Bananas, Kiwis and Strawberries
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Guava Blast</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Guava and Lemon Candy
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Green Party</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Juicy Green Apple and Kiwi
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Miss Samoa</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Just like a Samoa Girl Scout Cookie
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 20%/80%</strong>
                              <br />
                                    <strong className='end-text'>Nicotine Levels: 0mg, 3mg, 6mg</strong>
                                    <br />
                                    <strong className='end-text'>$19.99 60ml</strong>
                                </p>
                         </div>
                   </div>
                   </Container>
                </body>
            </div>
        )
    }
}

export default Faq