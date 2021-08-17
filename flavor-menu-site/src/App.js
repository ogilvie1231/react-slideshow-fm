import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import './App.css';
import NavBar from './components/nav/NavBar'
import history from "./utils/history.js";
import Home from './components/home/Home'
// import Menu from './components/menu/menu'
// import Anarchist from './components/pages/Anarchist'
// import Badger from './components/pages/Badger-hill'
// import Beard from './components/pages/Beard'
// import Burst from './components/pages/Burst'
// import Cali from './components/pages/Cali-grown'
// import Chubby from './components/pages/Chubby'
// import Coastal from './components/pages/Coastal'
// import Colors from './components/pages/Colors'
// import Faq from './components/pages/Fa-q'
// import FreshFarms from "./components/pages/Fresh-farms";
// import FreshPressed from "./components/pages/Fresh-pressed";
// import Fruitia from "./components/pages/Fruitia";
// import Glas from "./components/pages/Glas-basix";
// import Golden from "./components/pages/Golden-ticket";
// import Gummy from "./components/pages/Gummy-beast";
// import JavaJoe from "./components/pages/Java-joe";
// import JuiceHead from "./components/pages/Juice-head";
// import Lyf from "./components/pages/Lyf";
// import Mega from "./components/pages/Mega";
// import Milkshake from "./components/pages/Milkshake";
// import Mints from "./components/pages/Mints";
// import Naked from "./components/pages/Naked";
// import Pinup from "./components/pages/Pinup";
// import Reds from "./components/pages/Reds";
// import Slammin from "./components/pages/Slammin";
// import Svrf from "./components/pages/Svrf";
// import Taylor from "./components/pages/Taylor";
// import TimeBomb from "./components/pages/Time-bomb";
// import Verdict from "./components/pages/Verdict";
// import Wyatt from "./components/pages/Wyatt-earp";
import Zen from "./components/pages/Zen-haus";


class App extends Component {
  render() {
    return (
      <div className="App">
        
      <header>
        <NavBar />
       </header>
       <body>
         <Router history={history}>
           <Switch>
         <Route path="/" component={Home} />
         <Route path="/home" component={Home} />
         {/* <Home /> */}
         {/* <Anarchist />
         <Badger />
         <Beard />
         <Burst />
         <Cali />
         <Chubby />
         <Coastal />
         <Colors />
         <Faq />
         <FreshFarms />
         <FreshPressed />
         <Fruitia />
         <Glas />
         <Golden />
         <Gummy />
         <JavaJoe />
         <JuiceHead />
         <Lyf />
         <Mega />
         <Milkshake />
         <Mints />
         <Naked />
         <Pinup />
         <Reds />
         <Slammin />
         <Svrf />
         <Taylor />
         <TimeBomb />
         <Verdict />
         <Wyatt />
         <Zen /> */}
</Switch>
         </Router>

       </body>
      </div>
    )
  }
}

export default App;
