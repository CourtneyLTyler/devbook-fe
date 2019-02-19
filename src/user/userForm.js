import React, { Component } from "react";
// import index from "../index";
import axios from "axios";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      profilePic: "",
      location: "",
      gitHubUrl: "",
      employer: "",
      specialty: "",
      projects: ""
      // comments: "",
      // post: "",
      //jobs: ""
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefult();
    console.log(this.state);

    axios
      .post("/", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form>
        <label>
          UserName:
          <input
            name="userName"
            placeholder="userName"
            value={this.state.userName}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          FirstName:
          <input
            name="firstName"
            placeholder="firstName"
            value={this.state.firstName}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          LastName:
          <input
            name="lastName"
            placeholder="lastName"
            value={this.state.lastName}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          email:
          <input
            name
            placeholder="email"
            value={this.state.email}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          Profile Picture:
          <input
            name="profilePic"
            placeholder="profilePic"
            value={this.state.profilePic}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          Location:
          <input
            name="location"
            placeholder="location"
            value={this.state.location}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          employer:
          <input
            name="employer"
            placeholder="employer"
            value={this.state.employer}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          GithubURL:
          <input
            name="gitHubUrl"
            placeholder="gitHubUrl"
            value={this.state.gitHubUrl}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          spacialty:
          <input
            name="specialty"
            placeholder="specialty"
            value={this.state.specialty}
            onchange={e => this.change(e)}
          />
        </label>

        <label>
          projects:
          <input
            name="projects"
            placeholder="projects"
            value={this.state.projects}
            onchange={e => this.change(e)}
          />
        </label>

        {/* <label>
          comments:
          <input
            name="comments"
            placeholder="comments"
            value={this.state.comments}
            onchange={e => this.change(e)}
          />
        </label> */}

        {/* <label>
          post:
          <input
            name="post"
            placeholder="post"
            value={this.state.post}
            onchange={e => this.change(e)}
          />
        </label> */}

        {/* <label>
          Jobs:
          <input
            name="Jobs"
            placeholder="jobs"
            value={this.state.jobs}
            onchange={e => this.change(e)}
          />
        </label> */}
        <button onClick={e => this.onSubmit(e)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserForm;
