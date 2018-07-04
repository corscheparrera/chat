import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";

const CURRENCY = "CAD";

const Facture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
class Payment extends Component {
  constructor() {
    super();
    this.state = {
      userPath: "",
      chatPath: "",
      amount: "",
      paymentIsDone: false
    };
  }

  componentWillMount = () => {
    this.getChargeInfos();
  };

  getChargeInfos = () => {
    const url = window.location.href;
    let string = url.replace("http://192.168.2.11:3000/charge/", "");
    let chargeInfos = { userId: "", amount: "" };
    string.split("/").forEach((data, i) => {
      if (i === 0) {
        chargeInfos.userId = data;
      }
      if (i === 1) {
        chargeInfos.amount = data;
      }
    });
    console.log(chargeInfos);
    this.setState({
      userPath: `allUsers/${chargeInfos.userId}`,
      chatPath: `allChat/chat${chargeInfos.userId}`,
      amount: chargeInfos.amount
    });
  };
  successPayment = data => {
    // alert("Payment Successful");
    this.setState({ paymentIsDone: true });
  };

  errorPayment = data => {
    alert("Payment Error");
  };

  displayText = () => {
    if (!this.state.paymentIsDone) {
      return (
        <Facture>
          <Jumbotron style={{ padding: 30, maxWidth: "50%" }}>
            <h1>Facture pour honoraires d'avocats</h1>
            <p>
              Afin de poursuivre les discussions avec Maître Marc-Antione Harvey
              sur l'application Photo Ticket, veuillez règler la facture
              suivante.
            </p>
            <p>
              <StripeCheckout
                name={"Facture pour honoraires"}
                description={"Maître Marc-Antoine Harvey"}
                amount={this.fromCanToCent(this.state.amount)}
                token={this.onToken(
                  this.state.amount,
                  "Maître Marc-Antoine Harvey"
                )}
                currency={CURRENCY}
                stripeKey={STRIPE_PUBLISHABLE}
                closed={this.onClosed}
              />
            </p>
          </Jumbotron>
        </Facture>
      );
    } else if (this.state.paymentIsDone) {
      return (
        <Facture>
          <Jumbotron style={{ padding: 30, maxWidth: "50%" }}>
            <h1>Merci de votre confiance.</h1>
            <p>
              Maître Marc-Antione Harvey vous contactera dans les plus brefs
              délais.
            </p>
            <p>Vous pouvez fermez cette page.</p>
          </Jumbotron>
        </Facture>
      );
    }
  };
  fromCanToCent = amount => amount * 100;
  onToken = (amount, description) => token =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: this.fromCanToCent(amount)
      })
      .then(this.successPayment)
      .catch(this.errorPayment);

  render() {
    return this.displayText();
  }
}

export default Payment;
