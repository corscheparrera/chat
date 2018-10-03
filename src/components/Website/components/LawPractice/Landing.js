import React, { Component } from "react";

import * as Scroll from "react-scroll";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import polyglot from "../../Translator";

class Landing extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", () => {
      console.log("begin", arguments);
      // this.closeMnu();
    });
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <header className="mastheadLaw">
        <div id="home" className="container h-100">
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">{polyglot.t("landingMessage1")}</h1>
                <h1 className="mb-5">{polyglot.t("landingMessage2")}</h1>

                <a
                  className="btn btn-outline btn-xl"
                  to="/contact"
                  style={{ borderColor: "#f16403" }}
                >
                  <Link
                    activeClass="active"
                    className="nav-link js-scroll-trigger"
                    to="contact"
                    spy={true}
                    smooth="easeInOutQuart"
                    duration={1000}
                  >
                    {polyglot.t("start")}
                  </Link>
                </a>
              </div>
            </div>
            <div className="col-lg-5 my-auto">
              <div className="device-container" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
