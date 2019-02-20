import React, { Component } from "react";

class UserProfile extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {

  //     }
  // }
  componentDidMount() {
    axios
      .get("http://localhost:3001/user")
      .then(res => {
        console.log(res);
        this.setState({});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Your Profile</h1>
        <h1> {this.props.userName}</h1>
        <h1> {this.props.firstName}</h1>
        <h1> {this.props.lastName}</h1>
        <h1> {this.props.profilePic}</h1>
        <h1> {this.props.gitHubUrl}</h1>
        <h1> {this.props.email}</h1>
        <h1> {this.props.employer}</h1>
        <h1> {this.props.specialty}</h1>
        <h1> {this.props.projects}</h1>
        <h1> {this.props.email}</h1>
      </div>
    );
  }
}

export default UserProfile;
