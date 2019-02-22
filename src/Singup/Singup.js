import React, { Component } from "react";

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <label> Email: </label>
          <input type="text" name="email" onChange={this.onChange} />
          <label> Password: </label>
          <input type="password" name="password" onChange={this.onChange} />
        </form>
      </div>
    );
  }
}

export default Singup;
