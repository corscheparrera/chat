import { Col, Grid, Row } from "react-bootstrap";
import React, { Component } from "react";

import Chat from "./Chat.js";
import SripeIcon from "react-icons/lib/fa/cc-stripe";
import fire from "./Firebase.js";
import styled from "styled-components";

const database = fire.database();

const Bold = styled.h5`
  font-weight: bold;
`;
const UserList = styled.div`
  min-height: 100vh;
  padding-right: 20px;
  border-right: 1px solid #aaa;
`;

const UserDiv = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  &:hover {
    background: #a9a9a9;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    `
  background: #00FF7F;
  `};
`;

const UserRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPath: "",
      chatPath: "",
      email: ""
    };
  }

  componentWillMount() {
    this.getChatPath();
  }

  getChatPath = () => {
    const url = window.location.href;
    const id = url.replace("167.99.189.31/chat/", "");
    this.setState(
      {
        userPath: `allUsers/${id}`,
        chatPath: `allChat/chat${id}`,
        users: [],
        chat: [],
        email: ""
      },
      () => {
        this.getUsers();
      }
    );
  };

  getUsers = async () => {
    let arrayOfUsers = [];
    const eventRef = database.ref("allUsers");
    const snapshot = await eventRef.once("value");
    const users = snapshot.val();

    for (var key in users) {
      arrayOfUsers.push(users[key]);
    }

    this.setState({ users: arrayOfUsers }, () => this.startChat());
  };

  startChat = async () => {
    try {
      await database.goOnline();

      // get messages
      database
        .ref(`${this.state.chatPath}`)
        .on("child_added", x => this.updateState(x.val()));

      // get user email
      let snapshot = await database.ref(`${this.state.userPath}`).once("value");
      let email = snapshot.val().email;
      this.setState({ email });
    } catch (e) {
      console.log(e);
    }
  };

  updateState = data => {
    this.setState({
      chat: this.state.chat.concat([data])
    });
  };

  selectConvo = newID => {
    this.props.history.push(`/chat/${newID}`);
    this.getChatPath();
  };

  checkIfCurrentlyViewed = email => {
    if (email === this.state.email) {
      return "active";
    }
  };
  renderUsers = (data, i) => {
    return (
      <UserDiv
        active={this.checkIfCurrentlyViewed(data.email)}
        key={i}
        id={data.uid}
        onClick={() => this.selectConvo(data.uid)}
      >
        <UserRow>
          <Bold>{"Nom:"} </Bold>
          <h5>
            {data.name} {data.lastName}
          </h5>
        </UserRow>
        <UserRow>
          <Bold>{"Email: "}</Bold>
          <h5>{data.email}</h5>
          <SripeIcon size={40} style={{ paddingLeft: 10 }} />
        </UserRow>
      </UserDiv>
    );
  };
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4}>
            <UserList>
              <h3>Utilisateurs</h3>
              {this.state.users.map(this.renderUsers)}
            </UserList>
          </Col>
          <Col sm={8}>
            <Chat
              chatPath={this.state.chatPath}
              userPath={this.state.userPath}
              email={this.state.email}
              chat={this.state.chat}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Main;
