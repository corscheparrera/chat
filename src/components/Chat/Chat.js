import { Col, Grid, Row } from "react-bootstrap";

import ChatInput from "./ChatInput";
import Messages from "./Messages";
import React, { Component } from "react";
import styled from "styled-components";

const avocat = {
  email: "Maître Harvey"
};

const Outer = styled.div`
  -moz-border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  border-radius: 0.3em;
  border: 1px solid #aaaaaa;
  width: 100%;
  height: 60vh;
  /* margin: 5em auto 0; */
  margin-bottom: 20px;
  overflow-y: scroll;
`;
const Inner = styled.div`
  -moz-border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  border-radius: 0.3em;
  width: 100%;
  text-align: center;
  padding: 2em;
`;
const TitleChat = styled.h1`
  text-align: center;
`;
const Cient = styled.h4`
  text-align: center;
  padding-bottom: 30px;
`;

export default class Chat extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <TitleChat>Chat Room</TitleChat>
            <Cient>Client: {this.props.email}</Cient>
            <Outer>
              <Inner>
                <Messages chat={this.props.chat} />
              </Inner>
            </Outer>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ChatInput user={avocat} path={this.props.chatPath} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
