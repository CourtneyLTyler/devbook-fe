import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import UserForm from "./user/userForm";
import userProfile from "./user/UserProfile";
import userForm from "./User/UserForm";

ReactDOM.render(
  <Router>
    <UserForm />
  </Router>,
  document.getElementById("root")
);

ReactDOM.render(<userProfile />, document.getElementById("root"));
