import React, { Component } from "react";
import './App.css';
// import NavBar from './components/NavBar'
import Home from './components/home/Home'
import Menu from './components/menu/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <header>
        {/* <NavBar /> */}
       </header>
       <body>
         <Home />
        <Menu />
       </body>
      </div>
    )
  }
}

export default App;
