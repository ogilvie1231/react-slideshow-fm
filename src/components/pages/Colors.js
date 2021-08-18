import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/colors-logo.png'

class Colors extends Component {
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
                                <h3 className=' flavor-name'>Sour</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A sweet and sour candy that is sure to satisfy
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Gold</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A divine creamy butterscotch
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Fruity</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A blend of peaches, watermelons, apples and strawberries
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Red</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A strawberry, raspberry with a splash of cherry
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 30%/70%</strong>
                              <br />
                                    <strong className='end-text'>Nicotine Levels: 0mg, 3mg</strong>
                                    <br />
                                    <strong className='end-text'>$24.99 100ml</strong>
                                </p>
                         </div>
                   </div>
                   </Container>
                </body>
            </div>
        )
    }
}

export default Colors