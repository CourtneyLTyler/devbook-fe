import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <UserForm />
  </Router>,
  document.getElementById("root")
);

ReactDOM.render(<userProfile />, document.getElementById("root"));
