import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/mega-logo.png'

class MegaSalts extends Component {
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
                                <h3 className=' flavor-name'>Apple Crumb</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Sweet and Savory Apple Baked in Brown Sugar with hints of Cinnamon in Crumble Pie Crust
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Blueberry Crumb</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Sweet Ripe Blueberries and Brown Sugar Baked in a Warm Savory Crumble Pie
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Coffee Donuts</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                Premium Roasted Coffee with the perfect amount of Chocolate doughy Deliciousness
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Mango Rush</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Juicy Fusion of Fresh Mangos and White Peach
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Mango Rush Ice</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Juicy Fusion of Fresh Mangos, White Peach  & Menthol
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Watermelon Rush</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Juicy Fusion of Mouthwatering Watermelon and Sweet Strawberries
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Watermelon Rush Ice</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A Juicy Fusion of Mouthwatering Watermelon and Sweet Strawberries with the perfect combination of Menthol
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 30%/70%</strong>
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

export default MegaSalts