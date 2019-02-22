import React, { Component } from "react";
import axios from 'axios'

class ProjectCreate extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      linkToRepo: "",
      description: "",
      Thumbnail: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("form has been submitted");

    axios.post("https://devbook-backend.herokuapp.com/projects", this.state).then(result => {
      console.log(result);
      this.props.history.push("/projects");
    });
  };

  render() {
    const { title, description, linkToRepo, Thumbnail } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label> Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <br />
        <label> Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={this.onChange}
        />
        <br />
        <label> Link To Repo: </label>
        <input
          type="text"
          name="linkToRepo"
          value={linkToRepo}
          onChange={this.onChange}
        />
        <br />
        <label> Thumbnail: </label>
        <input
          type="text"
          name="Thumbnail"
          value={Thumbnail}
          onChange={this.onChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProjectCreate;

// Projects:
//     • linkToRepo: String
//     • title: String
//     • description: String
//     • Thumbnail: String
//         § Optional
