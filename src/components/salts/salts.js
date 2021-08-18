import React, { Component } from "react";
import Navbar from "../nav/NavBar";
import Logo from "../../assets/img/ivape-logo.png";
import "./salts.css";
import ZenSalts from "../pages/Zen-salt";
import BadgerSalts from "../pages/Badger-salt";
import BurstSalts from "../pages/Burst-salt";
import CoastalSalts from "../pages/Coastal-salt";
import FreshFarmsSalts from "../pages/Fresh-farms-salt";
import FreshPressedSalts from "../pages/Fresh-pressed-salt";
import FruitiaSalts from "../pages/Fruitia-salt";
import MegaSalts from "../pages/Mega-salt";
import MintsSalts from "../pages/Mint-salt";
import GoldenSalts from "../pages/Golden-salt";
import SvrfSalts from '../pages/Svrf-salt';
import TaylorSalts from "../pages/Taylor-salt";
import TimeBombSalts from "../pages/Timebomb-salt";
import VerdictSalts from "../pages/Verdict-salt";

class Salt extends Component {
  render() {
    return (
      <div>
        <body>
          <div>
            <BadgerSalts />
            <BurstSalts />
            <CoastalSalts />
            <FreshFarmsSalts />
            <FreshPressedSalts />
            <FruitiaSalts />
            <GoldenSalts />
            <MegaSalts />
            <MintsSalts />
            <SvrfSalts />
            <TaylorSalts />
            <TimeBombSalts />
            <VerdictSalts />
            <ZenSalts />
          </div>
        </body>
      </div>
    );
  }
}

export default Salt;
