import React, { Component } from "react";
import "./App.css";
import userForm from "./user/userForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p>Hello</p> */}
        <userForm />
      </div>
    );
  }
}

export default App;
