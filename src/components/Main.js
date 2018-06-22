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
  height: 40px;
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
    const id = url.replace("http://localhost:3000/", "");
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
    console.log(users);

    for (var key in users) {
      arrayOfUsers.push(users[key]);
    }
    console.log(arrayOfUsers);
    this.setState({ users: arrayOfUsers }, () => this.startChat());
  };

  startChat = async () => {
    try {
      await database.goOnline();
      database
        .ref(`${this.state.chatPath}`)
        .on("child_added", x => this.updateState(x.val()));
      database.ref(`${this.state.userPath}`).once("value", result => {
        let email = result.val().email;
        this.setState({ email });
      });
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
    this.props.history.push(`/${newID}`);
    this.getChatPath();
  };

  checkIfCurrentlyViewed = email => {
    if (email === this.state.email) {
      return "active";
    }
  };
  renderUsers = (data, i) => {
    console.log(data);
    return (
      <UserDiv
        active={this.checkIfCurrentlyViewed(data.email)}
        key={i}
        id={data.uid}
        onClick={() => this.selectConvo(data.uid)}
      >
        <UserRow>
          <Bold>{"Email: "}</Bold>
          <h5>{data.email}</h5>
          <SripeIcon size={40} style={{ paddingLeft: 10 }} />
        </UserRow>
        {/* <UserRow>
          <Bold>{"Dernière connexion: "}</Bold>
          <h5>{<Moment fromNow>{data.metadata.lastSignInTime}</Moment>}</h5>
        </UserRow> */}
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
