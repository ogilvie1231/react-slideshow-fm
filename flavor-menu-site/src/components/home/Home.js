import React, { Component } from "react";
import Navbar from "../nav/NavBar"
import Logo from '../../assets/img/ivape-logo.png'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* <Navbar /> */}
                </header>
                <body>
                    <div className="logo-div">

                    <img id="logo" src={Logo} alt="iVape-logo" srcset="" />
                    </div>

                </body>
            </div>
        )
    }
}

export default Home