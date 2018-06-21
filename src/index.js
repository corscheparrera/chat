import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";

// import App from "./components/App";
import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
