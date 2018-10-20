import React from "react";
import Carte from "./Carte";
import { FaPhone, FaMapPin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import polyglot from "../../Translator";
import translator from "../../Translator";

const ContactContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  height: 70vh;
`;
const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Par = styled.p`
  margin: 0;
  padding-left: 10px;
`;
const Contact = props => {
  return (
    <div
      id="contact"
      className="row"
      style={{ paddingTop: 300, width: "100vw" }}
    >
      <div className="col-md-8">
        <Carte />
      </div>
      <div className="col-md-4">
        <ContactContaier>
          <div>
            <h2>{polyglot.t("contact")}</h2>
            <ContactRow>
              <FaPhone />
              <Par>438-872-5034</Par>
            </ContactRow>
            <ContactRow>
              <FaMapMarkerAlt />
              <Par>7275 sherbrooke Est, Suite 2217, Montréal (QC), H1N 1E9</Par>
            </ContactRow>
            <ContactRow>
              <FaMapPin />
              <Par>{translator.t("nextTo")}</Par>
            </ContactRow>
            <ContactRow>
              <FaEnvelope />
              <Par>phototicketmontreal@gmail.com</Par>
            </ContactRow>
          </div>
        </ContactContaier>
      </div>
    </div>
  );
};
export default Contact;
