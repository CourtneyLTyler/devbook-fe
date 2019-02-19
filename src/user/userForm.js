import React, { Component } from "react";
import index from "../index";

class userForm extends Component {
  state = {
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    // profilePic: "",
    location: "",
    githubUrl: "",
    employer: "",
    // specialty: "",
    projects: "",
    comments: "",
    post: "",
    jobs: ""
  };

  render() {
    return (
      <form>
        <label>
          UserName:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          FirstName:
          <input type="text" ref={input => (this.input = input)} />
        </label>

        <label>
          LastName:
          <input type="text" ref={input => (this.input = input)} />
        </label>

        <label>
          email:
          <input type="text" ref={input => (this.input = input)} />
        </label>

        <label>
          Profile Picture:
          <input type="text" ref={input => (this.input = input)} />
        </label>

        <label>
          Location:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          employer:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          GithubURL:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          spacialty:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          projects:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          comments:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          post:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          Jobs:
          <input type="text" ref={input => (this.input = input)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default userForm;
