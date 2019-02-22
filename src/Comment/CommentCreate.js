import React, { Component } from "react";
import axios from "axios";
import "./Comments.css";

class CommentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      devPostId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState(
      { [evt.target.name]: evt.target.value, devPostId: this.props.devPostId },
      () => {
        console.log(this.state);
      }
    );
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.post("http://localhost:3001/comments", this.state).then(res => {
      console.log(res);
      console.log(res.data);
    });
    console.log("CreateComment Fired");
  }
  render() {
    console.log(`devPostId: ${this.props.devPostId}`);
    return (
      <div className="indiv-comment">
        <h1> Create Your Comment</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Comment:</label>
          <br />
          <textarea
            type="text"
            name="content"
            placeholder="Comments here"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <label> Your Post Id:</label>
          <br />
          <input
            type="text"
            name="devPostId"
            placeholder="Your Post Id Read Only"
            value={this.props.devPostId}
            readOnly
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CommentCreate;
