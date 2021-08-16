import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
// import Brand from '../../assets/img/.png'
// import Brand from 'https://www.fillmurray.com/g/200/300'

class Menu extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <Navbar /> */}
                </header>
                <body>
                   <div className="menu-div">
                       <div>
                       {/* <img className='brand-logo' src={Brand}></img> */}
                       <img className="brand-logo" src='https://www.fillmurray.com/g/600/600'></img>
                       </div>
                       <div>
                           <img className='flavors-img' src={Flavor}></img>
                       </div>
                        <div className="row">
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                {/* <hr className='line' /> */}
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                         </div>
                         <div className="row">
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                {/* <hr className='line' /> */}
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                         </div>
                         <div className="row">
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-2'>
                                <h3 className=' flavor-name'>TEST</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                    Test paragraph
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 40%/60%</strong>
                              <br />
                                    <strong className='end-text'>Nicotine Levels: 0mg, 3mg, 6mg</strong>
                                    <br />
                                    <strong className='end-text'>$19.99 60ml</strong>
                                </p>
                         </div>
                   </div>
                </body>
            </div>
        )
    }
}

export default Menu