import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
=======
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import UserForm from "./user/userForm";
import userProfile from "./user/UserProfile";
import userForm from "./User/UserForm";
>>>>>>> user

ReactDOM.render(
  <Router>
    <UserForm />
  </Router>,
  document.getElementById("root")
);

ReactDOM.render(<userProfile />, document.getElementById("root"));
