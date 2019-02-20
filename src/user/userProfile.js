import React, { Component } from "react";

class userProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello {this.props.firstname}</h1>
      </div>
    );
  }
}

export default userProfile;
