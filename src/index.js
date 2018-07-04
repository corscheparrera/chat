import "./index.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import fire from "./components/Chat/Firebase";
import Main from "./components/Chat/Main";
import Login from "./components/Chat/Login";
import Payment from "./components/Pay/Payment";
import PrivateRoute from "./components/Chat/PrivateRoute";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

export default class App extends Component {
  state = { loading: true, authenticated: false, user: null };
  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <PrivateRoute
            path="/chat"
            component={Main}
            authenticated={this.state.authenticated}
          />

          <Route path="/charge" component={Payment} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
