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
<<<<<<< HEAD
      job: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
=======
      job: {},
      devPostId: ''
    }
    this.handleDelete = this.handleDelete.bind(this)
>>>>>>> testingCRUD
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/jobs/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          job: res.data,
          devPostId: res.data._id
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
      });
  };

  render() {
    console.log(this.state)
    return (
<<<<<<< HEAD
      <div key={this.state.job._id} className="indiv-job">
        <p>Position: {this.state.job.position}</p>
        <p>Company: {this.state.job.company}</p>
        <p>{this.state.job.logoURL}</p>
=======
      <div key={this.state.job._id} className='indiv-job'>
        <h1>Position: {this.state.job.position}</h1>
        <h2>Company: {this.state.job.company}</h2>
        <img
          src={this.state.job.logoURL}
          alt={this.state.job.company}
        />
>>>>>>> testingCRUD
        <p>Info: {this.state.job.content}</p>
        <p>Location: {this.state.job.location}</p>

        <Link to={`/jobs/edit/${this.state.job._id}`}>
          <button value="update" type="update">
            Update
          </button>
        </Link>

<<<<<<< HEAD
        <button value="delete" type="submit" onClick={this.handleDelete}>
          Delete
        </button>
=======
        <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
>>>>>>> testingCRUD

        <CommentList devPostId={this.state.devPostId} />
        <CommentCreate devPostId={this.state.devPostId} />
      </div>
    );
  }
}

export default JobShow;
