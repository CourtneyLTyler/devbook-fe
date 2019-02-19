import React, { Component } from "react";
// import index from "../index";

class userForm extends Component {
  render() {
    return (
      <form>
        <label>
          UserName:
          <input type="text" />
        </label>
        <label>
          FirstName:
          <input type="text" />
        </label>

        <label>
          LastName:
          <input type="text" />
        </label>

        <label>
          Email:
          <input type="text" />
        </label>

        <label>
          Profile Picture:
          <input type="URL" />
        </label>

        <label>
          Location:
          <input type="text" />
        </label>
        <label>
          Employer:
          <input type="text" />
        </label>
        <label>
          GithubURL:
          <input type=" URL" />
        </label>
        <label>
          Spacialty:
          <input type="text" />
        </label>
        <label>
          Projects:
          <input type="text" />
        </label>
        <label>
          Comments:
          <input type="text" />
        </label>
        <label>
          Post:
          <input type="text" />
        </label>
        <label>
          Jobs:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default userForm;
