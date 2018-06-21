import { Col, Grid, Row } from "react-bootstrap";

import ChatInput from "./ChatInput";
import Messages from "./Messages";
import React from "react";
import styled from "styled-components";

const avocat = {
  email: "Maître Harvey"
};

const TitleChat = styled.h1`
  text-align: center;
`;
const Cient = styled.h4`
  text-align: center;
  padding-bottom: 30px;
`;
const Chat = props => (
  <Grid>
    <Row>
      <Col sm={8}>
        <TitleChat>Chat Room</TitleChat>
        <Cient>Client: {props.email}</Cient>
        <Messages chat={props.chat} />
      </Col>
    </Row>
    <Row>
      <Col sm={4} smOffset={2}>
        <ChatInput user={avocat} path={props.chatPath} />
      </Col>
    </Row>
  </Grid>
);

export default Chat;
