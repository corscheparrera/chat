import { Col, Grid, Row } from "react-bootstrap";

import ChatInput from "./ChatInput";
import Messages from "./Messages";
import React, { Component } from "react";
import styled from "styled-components";

const avocat = {
  email: "Maître Harvey"
};

const Scrollable = styled.div`
  overflow: auto;
  padding: 10px;
  height: 60vh;
  margin-bottom: 20px;
`;
const TitleChat = styled.h1`
  text-align: center;
`;
const Cient = styled.h4`
  text-align: center;
  padding-bottom: 30px;
`;

export default class Chat extends Component {
  componentDidMount() {
    this.refs.scrollDiv.addEventListener("wheel", evt => {
      const { scrollDiv } = this.refs;
      // console.log(root);
      // Note: for perf, clientHeight & scrollHeight could be cached and updated on resize
      if (
        (scrollDiv.scrollTop ===
          scrollDiv.scrollHeight - scrollDiv.clientHeight &&
          evt.deltaY > 0) ||
        (scrollDiv.scrollTop === 0 && evt.deltaY < 0)
      ) {
        evt.preventDefault();
      }
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={8}>
            <TitleChat>Chat Room</TitleChat>
            <Cient>Client: {this.props.email}</Cient>
            <Scrollable>
              <div ref="scrollDiv">
                <Messages chat={this.props.chat} />
              </div>
            </Scrollable>
          </Col>
        </Row>
        <Row>
          <Col sm={4} smOffset={2}>
            <ChatInput user={avocat} path={this.props.chatPath} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
