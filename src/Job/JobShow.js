import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import CommentCreate from '../Comment/CommentCreate'
import CommentList from '../Comment/CommentList'
import './Job.css'

class JobShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      job: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/jobs/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          job: res.data
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //   handleDelete(){
  //     console.log("deleting" + this.props.match.params.id);
  //     axios.delete('http://localhost:3001/jobs/'+ this.props.match.params.id)
  //       .then((res) => {
  //         console.log(res.data)
  //         this.context.history.push("/jobs")
  //         this.setState({
  //             job: {}
  //         })
  //       });
  //     //   .catch((err)=> {
  //     //     console.log(err)
  //     //   })
  //   }

  handleDelete = e => {
    e.preventDefault();

    axios.delete(`http://localhost:3001/jobs/${this.state.job._id}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          job: {}
        })
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div key={this.state.job.position} className='indiv-job'>
        <h1>Position: {this.state.job.position}</h1>
        <h2>Company: {this.state.job.company}</h2>
        <p>{this.state.job.logoURL}</p>
        <p>Info: {this.state.job.content}</p>
        <p>Location: {this.state.job.location}</p>

        <Link to={`/jobs/edit/${this.state.job._id}`}>
          <button value="update" type="update">Update</button>
        </Link>
        <Link to='/jobs'>
          <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
        </Link>
        <CommentList />
        <CommentCreate />
      </div>
    );
  }
}

export default JobShow;
