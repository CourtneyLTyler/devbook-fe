import React, { Component } from "react";
import "./App.css";
import UserForm from "./User/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <UserForm />
      </div>
    );
  }
}

export default App;
