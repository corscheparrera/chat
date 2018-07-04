import React from "react";
import axios from "axios";

import { Button } from "react-bootstrap";
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
      await axios.post("http://192.168.2.11:5000/send-sms", { id: id });
    } catch (error) {
      console.log(error);
    }
  };

  const _handleClick = async () => {
    let messagesRef = database.ref(`${props.path}`);
    await messagesRef.push({
      text: this.userInput.value,
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
