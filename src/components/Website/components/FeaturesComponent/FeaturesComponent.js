import React, { Component } from "react";
import "./style.css";
import "simple-line-icons/css/simple-line-icons.css";
import demoScreen1 from "../../IMG_1243.PNG";
import polylgot from "../../Translator";

import { FaCamera, FaFolder, FaRocketchat, FaDollarSign } from "react-icons/fa";

export const FeaturesComponent = props => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>{polylgot.t("complete")}</h2>
          <p className="text-muted">
            Check out what you can do with this app theme!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
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
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <FaCamera style={{ color: "#ec2326" }} size={48} />
                    <h3>{polylgot.t("instant")}</h3>
                    <p className="text-muted">{polylgot.t("instantPar")}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <FaFolder style={{ color: "#ec2326" }} size={48} />
                    <h3>{polylgot.t("databse")}</h3>
                    <p className="text-muted">{polylgot.t("databsePar")}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <FaRocketchat style={{ color: "#ec2326" }} size={48} />
                    <h3>{polylgot.t("chat")}</h3>
                    <p className="text-muted">{polylgot.t("messagingPar")}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="feature-item">
                    <FaDollarSign style={{ color: "#ec2326" }} size={48} />
                    <h3>{polylgot.t("save")}</h3>
                    <p className="text-muted">{polylgot.t("savePar")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
