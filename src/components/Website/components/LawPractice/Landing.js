import React from "react";

// import "../../device-mockups/device-mockups.css";
// import demoScreen1 from "../../IMG_1239.PNG";
import polyglot from "../../Translator";

const Landing = props => {
  return (
    <header className="mastheadLaw">
      <div id="home" className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">{polyglot.t("landingMessage1")}</h1>
              <h1 className="mb-5">{polyglot.t("landingMessage2")}</h1>
              <a
                href="#download"
                className="btn btn-outline btn-xl js-scroll-trigger"
                style={{ color: "#f16403", borderColor: "#f16403" }}
              >
                {polyglot.t("start")}
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
};

export default Landing;
