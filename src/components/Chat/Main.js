import { Col, Grid, Row } from "react-bootstrap";
import React, { Component } from "react";
import Chat from "./Chat.js";
import fire from "./Firebase.js";
import styled from "styled-components";
import Spinner from "./Spinner";

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

const SpinArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 50px;
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
    const id = url.split("ID=").pop();

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
    this.toggleLoading();
    let arrayOfUsers = [];
    const eventRef = database.ref("allUsers");
    const snapshot = await eventRef.once("value");
    const users = snapshot.val();

    for (var key in users) {
      arrayOfUsers.push(users[key]);
    }

    this.setState({ users: arrayOfUsers, loading: false }, () =>
      this.startChat()
    );
  };

  toggleLoading = () => {
    if (this.state.loading) {
      this.setState({ loading: false });
    } else this.setState({ loading: true });
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
    this.props.history.push(`/chat/rACgvtw3QI/ID=${newID}`);
    this.getChatPath();
  };

  checkIfCurrentlyViewed = email => {
    if (email === this.state.email) {
      return "active";
    }
  };

  displayUsers = () => {
    if (this.state.loading) {
      return (
        <SpinArea>
          <Spinner />
        </SpinArea>
      );
    } else return this.state.users.map(this.renderUsers);
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
        </UserRow>
      </UserDiv>
    );
  };
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={5}>
            <UserList>
              <h3>Utilisateurs</h3>
              {this.displayUsers()}
            </UserList>
          </Col>
          <Col sm={7}>
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
