import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./webStyle.css";
import polyglot from "./Translator";
import "font-awesome/css/font-awesome.css";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { SocialComponent } from "./components/SocialComponent/SocialComponent";
import { CallToActionComponent } from "./components/CallToActionComponent/CallToActionComponent";
import { FeaturesComponent } from "./components/FeaturesComponent/FeaturesComponent";
import { AppDownloadComponent } from "./components/AppDownloadComponent/AppDownloadComponent";
import { HeroComponent } from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

class Website extends Component {
  constructor(props) {
    super(props);
    this.state = { navBarShrink: "", lang: polyglot.locale };
    this.handleScroll = this.handleScroll.bind(this);
  }
  switchLang = () => {
    polyglot.switchLanguage();
    this.setState({ lang: polyglot.locale });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset > 100 ? "navbar-shrink" : "";
    this.setState({ navBarShrink: nbs });
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <NavBarComponent navBarShrink={nbs} switchLang={this.switchLang} />
        <HeroComponent />
        <AppDownloadComponent />
        <FeaturesComponent />
        <CallToActionComponent />
        <SocialComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default Website;
