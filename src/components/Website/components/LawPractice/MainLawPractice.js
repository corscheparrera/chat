import React, { Component } from "react";
import "./styles.css";
import Nav from "./Nav";
import Landing from "./Landing";
import Services from "./Services";
import Contact from "./Contact";
class MainLawPractice extends Component {
  render() {
    return (
      <div>
        <Nav switchLang={this.props.switchLang} />
        <Landing />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default MainLawPractice;
