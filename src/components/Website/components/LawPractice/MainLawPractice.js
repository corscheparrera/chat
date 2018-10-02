import React, { Component } from "react";
import "./styles.css";
import Nav from "./Nav";
import Landing from "./Landing";
import Expertise from "./Expertise";
import Carte from "./Carte";
class MainLawPractice extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Landing />
        <Expertise />
        <Carte />
      </div>
    );
  }
}

export default MainLawPractice;
