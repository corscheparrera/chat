import { Col, Grid, Row } from "react-bootstrap";
import React, { Component } from "react";

import Chat from "./Chat.js";

const chatPath = "allChat/chatV68h7qVsHiWsIyLcx0T0pC2qrfQ2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: ""
    };
  }

  componentWillMount() {
    this.getUserId();
  }

  getUserId = () => {
    const url = window.location.href;
    const id = url.replace("http://localhost:3000/", "");
    this.setState({ chatId: `allChat/chat${id}` });
  };

  render() {
    return (
      <Grid>
        <Row>
          <h1
            style={{
              textAlign: "center",
              paddingBottom: 30
            }}
          >
            Chat Room
          </h1>
        </Row>
        <Row>
          <Col sm={12}>
            <Chat path={this.state.chatId} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;
