import React, { Component } from "react";
import "./Comments.css";
import { Link } from "react-router-dom";
import axios from "axios";
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      project: ''
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/comments").then(item => {
      this.setState({ comments: item.data });
      // console.log(this.state.comments);
    });
  }

  handleDelete() {
    axios.delete(`http://localhost:3001/comments/ + ${this.state.comments._id}`).then((item) => {
      console.log(item.data)
    })
    this.props.history('/comments')
  }
  render() {
    console.log(this.props.projects._id)
    const comments = this.state.comments.map(item => {
      return (
        <div className="indiv-comment" key={item._id}>
          <p>Comment: {item.content}</p>
          <p>Comment ID: {item._id}</p>
          <p>Likes: {item.likes}</p>
          <p>Author: {item.user}</p>
          <Link to={`/comments/edit/${item._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    });
    return <div className="indiv-comment">{comments}</div>;
  }
}

export default CommentList;
