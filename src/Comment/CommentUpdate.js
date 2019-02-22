import React, { Component } from "react";
import axios from "axios";
import "./Comments.css";

class CommentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/comments" + this.props.match.params.id)
      .then(res => {
        this.setState({
          content: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.put("http://localhost:3001/comments", this.state).then(res => {
      console.log(res);
      console.log(res.data);
    });
    console.log("CreateComment Fired");
  }
  render() {
    return (
      <div className="indiv-comment">
        <h1>Create Your Comment Here</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Comment:</label>
          <br />
          <textarea
            type="text"
            name="content"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CommentUpdate;
