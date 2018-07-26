import React, { Component } from "react";
import logo from "../../images/logo_photo_ticekt_9.png";
import styled from "styled-components";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";

const CURRENCY = "CAD";

const Facture = styled.div`
  display: flex;
  flex-direction: column;
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
    let string = url.replace("https://photo-ticket.ca/charge/", "");
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
          <img src={logo} alt="" style={{ height: "100px" }} />
          <div>
            <h2>Photo Ticket</h2>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5>
              Règler la facture pour poursuivre votre conversation avec Maître
              Harvey.
            </h5>
          </div>

          <StripeCheckout
            name={"Facture Photo Ticket"}
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
        </Facture>
      );
    } else if (this.state.paymentIsDone) {
      return (
        <Facture>
          <img src={logo} alt="" style={{ height: "100px" }} />
          <div style={{ textAlign: "center" }}>
            <h2>Merci de votre confiance.</h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <h5>Vous pouvez fermer cette page en toute sécurité.</h5>
          </div>
        </Facture>
      );
    }
  };
  fromCanToCent = amount => amount * 100;

  onToken = (amount, description) => token =>
    axios
      .post("/api/charge", {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: this.fromCanToCent(amount),
        receipt_email: token.email
      })
      .then(this.successPayment)
      .catch(this.errorPayment);

  render() {
    return this.displayText();
  }
}

export default Payment;
