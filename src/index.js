import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/Store";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
