import React, { Component } from "react";
// import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './menu.css'
import Flavor from '../../assets/img/flavors.png'
import { Container } from "react-bootstrap";
import Brand from '../../assets/logos/burst-logo.png'

class Burst extends Component {
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
                                <h3 className=' flavor-name'>Apple Watermelon</h3>
                                <div className='line'>
                                </div>
                                {/* <hr className='line' /> */}
                                <p className='text'>
                                An apple watermelon combination that you have to try to believe
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Berry Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                All your favorite berries mixed into a soft chewy candy
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Citrus Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A sweet mix of lemon lime candy
                                </p>
                            </div>
                        
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Guava Dragonfruit</h3>
                                <div className='line'>
                                </div>
                                {/* <hr className='line' /> */}
                                <p className='text'>
                                A mix of dragon fruit and guava that will leave your taste buds in nirvana
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Mango Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                An unbelievable chewy mango candy
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Melon Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A mix of melons that will leave you wanting more everytime
                                </p>
                            </div>
                        
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Peach Raspberry</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A peach raspberry pairing for the ages
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Sher Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A rainbow sherbet candy that will blow you away
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Strawberry Burst</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A strawberry candy that is full of flavor
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Strawberry Kiwi</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A strawberry Kiwi Blend that is everyone‘s favorite color in the pack.
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Blizzard Berry</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                "All your favorite berries mixed into a soft chewy candy with a cooling burst"
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Blizzard Mango</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A unbelievable chewy mango candy with a delightful touch of menthol
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Blizzard Melon</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A cooling mix of melons that will leave you wanting more every time
                                </p>
                            </div>
                            <div className='col-md-4 col-sm-6'>
                                <h3 className=' flavor-name'>Blizzard Strawberry</h3>
                                <div className='line'>
                                </div>
                                <p className='text'>
                                A strawberry candy that is full of flavor and  bit of menthol
                                </p>
                            </div>
                         </div>
                         <div className='row text end'>
                                <p>
                                    <strong className='end-text'>PG/VG: 35%/65%</strong>
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

export default Burst