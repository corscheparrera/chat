import React from "react";
import "./style.css";
import polyglot from "../../Translator";

export const CallToActionComponent = props => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            {polyglot.t("fight")}
            <br />
            {polyglot.t("tickets")}
          </h2>
          <div id="contact" />
          <a
            href="https://play.google.com/store/apps/details?id=com.ticketphoto.ticketphoto"
            className="btn btn-outline btn-xl js-scroll-trigger"
          >
            {polyglot.t("start")}
          </a>
        </div>
      </div>

      <div className="overlay" />
    </section>
  );
};
