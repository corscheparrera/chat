import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from "react-bootstrap";
import React, { Component } from "react";

import fire from "./Firebase.js";
import firebase from "firebase";

const database = fire.database();

const Messages = props => {
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

  const _handleClick = () => {
    let messagesRef = database.ref(`${props.path}`);
    messagesRef.push({
      text: this.userInput.value,
      user: props.user,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    this.userInput.value = "";
  };
  return (
    <div>
      <form className="form-inline" onSubmit={sendMessage}>
        <input
          style={{
            width: 250
          }}
          type="text"
          ref={r => (this.userInput = r)}
          placeholder="Envoyer un message..."
          required
          className="form-control"
        />
        <Button onClick={() => _handleClick()}>Envoyer</Button>
      </form>
    </div>
  );
};
export default Messages;
