import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CommentCreate from "../Comment/CommentCreate";
import CommentList from "../Comment/CommentList";
import "./Job.css";

class JobShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/jobs/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          job: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3001/jobs/${this.state.job._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          job: {}
        });
        this.props.history.push("/jobs");
      })
      .catch(err => {
        console.log(err);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div key={this.state.job._id} className="indiv-job">
        <h1>Position: {this.state.job.position}</h1>
        <h2>Company: {this.state.job.company}</h2>
        <p>{this.state.job.logoURL}</p>
        <p>Info: {this.state.job.content}</p>
        <p>Location: {this.state.job.location}</p>
        <CommentCreate />

        <Link to={`/jobs/edit/${this.state.job._id}`}>
          <button value="update" type="update">
            Update
          </button>
        </Link>

        <button value="delete" type="submit" onClick={this.handleDelete}>
          Delete
        </button>

        <CommentList />
      </div>
    );
  }
}

export default JobShow;
