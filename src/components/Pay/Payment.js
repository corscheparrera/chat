import React, { Component } from "react";
import Checkout from "./Checkout";

class Payment extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Checkout
            name={"The Road to learn React"}
            description={"Open Source React Book"}
            amount={1}
          />
        </p>
      </div>
    );
  }
}

export default Payment;
