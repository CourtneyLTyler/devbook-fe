import React, { Component } from "react";
import axios from "axios";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/user/" + this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({
          profile: res.data
        });
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>
          Hey {this.state.profile.firstName} {this.state.profile.lastName} Check
          Out Your Profile
        </h1>
        <img
          src={this.state.profile.profilePic}
          alt={this.state.profile.firstName}
        />
        <h1> {this.state.profile.userName}</h1>
        <h1> {this.state.profile.firstName}</h1>
        <h1> {this.state.profile.lastName}</h1>
        <h1> {this.state.profile.gitHubUrl}</h1>
        <h1> {this.state.profile.email}</h1>
        <h1> {this.state.profile.employer}</h1>
        <h1> {this.state.profile.specialty}</h1>
        <h1> {this.state.profile.projects}</h1>

        <button value="update" type="update">
          {" "}
          Update{" "}
        </button>

        <button value="delete" type="submit" onClick={this.handleDelete}>
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
}

export default UserProfile;
