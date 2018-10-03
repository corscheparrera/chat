import React from "react";
import "./styles.css";
import "simple-line-icons/css/simple-line-icons.css";
import Charte from "./Carte";
import polylgot from "../../Translator";

import {
  FaAppStore,
  FaSearchengin,
  FaRocketchat,
  FaDollarSign
} from "react-icons/fa";

const Services = props => {
  return (
    <section className="services" id="services">
      <div className="section-heading text-center">
        <h2>{polylgot.t("service")}</h2>
        <hr />
      </div>

      <div className="col-md-6 offset-md-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <FaDollarSign style={{ color: "#ec2326" }} size={48} />
                <h3>{polylgot.t("save")}</h3>
                <p className="text-muted">{polylgot.t("savePar")}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <FaRocketchat style={{ color: "#ec2326" }} size={48} />
                <h3>{polylgot.t("available")}</h3>
                <p className="text-muted">{polylgot.t("disponibilityPar")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <FaSearchengin style={{ color: "#ec2326" }} size={48} />
                <h3>{"Expertise"}</h3>
                <p className="text-muted">{polylgot.t("completeRepertory")}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="feature-item">
                <FaAppStore style={{ color: "#ec2326" }} size={48} />
                <h3>{polylgot.t("mobileApp")}</h3>
                <p className="text-muted">{polylgot.t("mobileAppPar")}</p>
                <p className="text-muted">
                  <a href="/app">{polylgot.t("linkApp")}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
