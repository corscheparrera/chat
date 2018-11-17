import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./webStyle.css";
import polyglot from "./Translator";
import "font-awesome/css/font-awesome.css";
import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { SocialComponent } from "./components/SocialComponent/SocialComponent";
import { CallToActionComponent } from "./components/CallToActionComponent/CallToActionComponent";
import { FeaturesComponent } from "./components/FeaturesComponent/FeaturesComponent";
import { AppDownloadComponent } from "./components/AppDownloadComponent/AppDownloadComponent";
import { HeroComponent } from "./components/HeroComponent/HeroComponent";
import MainLawPractice from "./components/LawPractice/MainLawPractice";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Privacy from "./components/PrivacyComponent/PrivacyComponent";

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
  getUserLanguage = () => {
    const lang = (navigator.language || navigator.userLanguage).slice(0, 2);
    console.log("lang", lang, "navigator", { navigator });
    return lang === "fr" || lang === "en" ? lang : "en";
  };
  handleScroll(event) {
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset > 100 ? "navbar-shrink" : "";
    this.setState({ navBarShrink: nbs });
  }
  urlPrivacyPolicy = () => {
    this.props.history.push("/privacy");
  };
  urlBackToMain = () => {
    this.props.history.push("/");
  };

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <MainLawPractice switchLang={this.switchLang} />
            </div>
          )}
        />
        <Route
          exact
          // app#page-top
          path="/app"
          render={() => (
            <div>
              <NavBarComponent
                navBarShrink={nbs}
                switchLang={this.switchLang}
              />
              <HeroComponent />
              <AppDownloadComponent />
              <FeaturesComponent />
              <CallToActionComponent />
              <SocialComponent />
              <FooterComponent urlPrivacyPolicy={this.urlPrivacyPolicy} />
            </div>
          )}
        />

        <Route
          exact
          path="/privacy"
          render={() => <Privacy urlBackToMain={this.urlBackToMain} />}
        />
      </div>
    );
  }
}

export default Website;
