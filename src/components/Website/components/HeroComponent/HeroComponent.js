import React from "react";
import "./style.css";
import "../../device-mockups/device-mockups.css";
import demoScreen1 from "../../IMG_1239.PNG";
import polyglot from "../../Translator";

export const HeroComponent = props => {
  return (
    <header className="masthead">
      <div id="home" className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">{polyglot.t("description")}</h1>
              <a
                href="#download"
                className="btn btn-outline btn-xl js-scroll-trigger"
              >
                {polyglot.t("start")}
              </a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen1} className="img-fluid" alt="" />
                  </div>
                  <div className="button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
