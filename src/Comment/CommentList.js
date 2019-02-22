import React, { Component } from "react";
import "./Comments.css";
import { Link } from "react-router-dom";
import axios from "axios";
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      projects: '',
      // devPostId: ''
    };
    console.log(`https://devbook-backend.herokuapp.com/comments/${this.props.devPostId}`)
    console.log(this.state.devPostId)

  }

  componentDidMount() {
    axios.get(`https://devbook-backend.herokuapp.com/comments/${this.props.devPostId}`).then(item => {
      this.setState({ comments: item.data });
      // console.log(this.state);
    });
  }

  handleDelete() {
    axios.delete(`https://devbook-backend.herokuapp.com/comments/ + ${this.state.comments._id}`).then((item) => {
      console.log(item.data)
    })
    this.props.history('/comments')
  }
  render() {
    console.log(`CommentList devPostId ${this.props.devPostId}`);
    const comments = this.state.comments.map(item => {
      return (
        <div className="indiv-comment" key={item._id}>
          <p>Comment: {item.content}</p>
          <p>Comment ID: {item._id}</p>
          <p>Likes: {item.likes}</p>
          <p>Author: {item.user}</p>
          <Link to={`/comments/edit/${item._id}`}>
            <button type="button" class="btn btn-success">
              Update
            </button>
          </Link>
          <button
            onClick={this.handleDelete}
            type="button"
            class="btn btn-success"
          >
            Delete
          </button>
        </div>
      );
    });
    return <div className="indiv-comment">{comments}</div>;
  }
}

export default CommentList;
