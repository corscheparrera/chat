import React from "react";
import axios from "axios";

import { Button, FormGroup, InputGroup, FormControl } from "react-bootstrap";
import fire from "./Firebase.js";
import firebase from "firebase";

const database = fire.database();

const Messages = props => {
  const getUserId = () => {
    const id = props.path.replace("allChat/chat", "");
    return id;
  };
  const sendMessage = event => {
    // Stop the form from refreshing the page on submit
    event.preventDefault();
    let messagesRef = database.ref(`${props.path}`);
    messagesRef.push({
      text: this.userInput.value,
      user: props.user,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    this.userInput.value = "";
  };

  const sendSMS = async () => {
    const id = getUserId();
    console.log(id);
    try {
      await axios.post("/api/send-sms", { id: id });
    } catch (error) {
      console.log(error);
    }
  };

  const _handleClickMessage = async () => {
    let messagesRef = database.ref(`${props.path}`);
    await messagesRef.push({
      text: this.userInput.value,
      user: props.user,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    await sendSMS();
    this.userInput.value = "";
  };

  const _handleClickCharge = async () => {
    const id = getUserId();
    let messagesRef = database.ref(`${props.path}`);
    await messagesRef.push({
      text: `http://192.168.2.11:3000/charge/${id}/${this.chargeInput.value}/`,
      user: props.user,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    await sendSMS();
    this.userInput.value = "";
  };

  return (
    <div>
      <form className="form-inline" onSubmit={sendMessage}>
        <input
          style={{
            width: 250,
            marginBottom: 20
          }}
          type="text"
          ref={r => (this.userInput = r)}
          placeholder="Envoyer un message..."
          required
          className="form-control"
        />
        <Button
          style={{
            marginBottom: 20
          }}
          onClick={() => _handleClickMessage()}
        >
          Envoyer
        </Button>
        <input
          style={{
            width: 250,
            marginBottom: 20
          }}
          type="text"
          ref={r => (this.chargeInput = r)}
          placeholder="Facturer un montant..."
          required
          className="form-control"
        />
        <Button
          style={{
            marginBottom: 20
          }}
          onClick={() => _handleClickCharge()}
        >
          Facturer
        </Button>
      </form>
    </div>
  );
};
export default Messages;
