import React, { Component } from "react";
import "./style.css";
import polyglot from "../../Translator";

export const FooterComponent = props => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {polyglot.t("rightsReserved")}</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">{polyglot.t("privacy")}</a>
          </li>
          <li className="list-inline-item">
            <a href="#">{polyglot.t("terms")}</a>
          </li>
          <li className="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
