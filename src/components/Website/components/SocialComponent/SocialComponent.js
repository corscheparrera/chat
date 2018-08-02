import React, { Component } from "react";
import "./style.css";
import polyglot from "../../Translator";
export const SocialComponent = props => {
  return (
    <section className="contact ">
      <div className="container">
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li className="list-inline-item social-google-plus">
            <a href="#">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li className="list-inline-item social-instagram">
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
