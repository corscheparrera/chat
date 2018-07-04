import React, { Component } from "react";
import fire from "./Firebase";
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  Button,
  FormControl
} from "react-bootstrap";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`;

export default class Login extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await fire
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/chat");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSignUp}>
          <h1 style={{ paddingBottom: 20 }}>Enregistrement</h1>
          <label>
            Email
            <FormControl name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Mot de passe
            <FormControl
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <Button style={{ marginTop: 20 }} type="submit">
            Sign Up
          </Button>
        </LoginForm>
      </div>
    );
  }
}
