import React, { Component } from "react";

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: " "
    };
    this.ComponentPassword = this.ComponentPassword.bind(this);
    this.ComponentPasswordConfirm = this.ComponentPasswordConfirm.bind(this);
    this.ValidatorFunction = this.ValidatorFunction.bind(this);
  }
  // write two functions for setState meaning when the user inputs the a value set that as the current value
  ComponentPassword(event) {
    this.setState({ password: event.target.value });
  }

  ComponentPasswordConfirm(event) {
    this.setState({ passwordConfirm: event.target.value });
  }

  ValidatorFunction() {
    if (this.state.password === this.state.passwordConfirm) {
      // say valid
      this.setState({
        valid: "OOOH Look at you are a GENIE in a bottle you are Valid"
      });
    } else {
      //say password do not match
      this.setState({
        valid: "COME ON GET YOUR STUFF TOGETHER, Password do not match"
      });
    }
  }
  // In here this is what you see in the brouser
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="username" />
        {/* this is looking for changes that have been made  */}
        <input
          onChange={this.ComponentPassword}
          type="password"
          placeholder="password"
        />
        <input
          onChange={this.ComponentPasswordConfirm}
          type="password"
          placeholder="confim password"
        />
        {/* AFTER THEY CLICK THE SUBMITION BUTTON IT GO THRU THE FUNCTION AND CHECK THE PASSWORD IF IT IS THE SAME */}
        <button onClick={this.ValidatorFunction}> submit </button>

        <p>{this.state.valid}</p>
      </div>
    );
  }
}
export default Singup;
