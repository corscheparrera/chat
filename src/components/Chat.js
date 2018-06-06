import { Col, Grid, Row } from "react-bootstrap";
import React, { Component } from "react";

import ChatInput from "./ChatInput";
import Messages from "./Messages";
import fire from "./Firebase.js";
import firebase from "firebase";

const database = fire.database();
const avocat = {
  name: "Maître Harvey"
};

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      path: this.props.path
    };
  }

  startChat = async () => {
    try {
      await database.goOnline();
    } catch (e) {
      console.log(e);
    }
  };

  componentWillMount() {
    this.startChat();
  }
  componentDidMount() {
    console.log(this.props.path);
    database
      .ref(`${this.props.path}`)
      .on("child_added", x => this.updateState(x.val()));
  }

  updateState = data => {
    this.setState({
      chat: this.state.chat.concat([data])
    });
  };

  render() {
    return (
      <Grid className="App">
        <Row>
          <Col sm={11} smOffset={1}>
            <Messages chat={this.state.chat} />
          </Col>
        </Row>
        <Row>
          <Col sm={6} smOffset={3}>
            <ChatInput user={avocat} path={this.props.path} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
