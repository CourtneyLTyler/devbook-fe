import React, { Component } from "react";
import axios from "axios";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    profile: {
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user")
      .then(res => {
        console.log(res);
        // What should i put here
        this.setState({
          profile: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Your Profile</h1>
        <h1> {this.state.profile.userName}</h1>
        <h1> {this.state.profile.firstName}</h1>
        <h1> {this.state.profile.lastName}</h1>
        <h1> {this.state.profile.profilePic}</h1>
        <h1> {this.state.profile.gitHubUrl}</h1>
        <h1> {this.state.profile.email}</h1>
        <h1> {this.state.profile.employer}</h1>
        <h1> {this.state.profile.specialty}</h1>
        <h1> {this.state.profile.projects}</h1>
      </div>
    );
  }
}

export default UserProfile;
