import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CommentCreate from '../Comment/CommentCreate'
import './Job.css'

class JobsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

      componentDidMount() {
        // axios.get('http://localhost:3001/jobs')
        axios.get('https://devbook-backend.herokuapp.com/jobs')
          .then(res => {
            this.setState({ jobs: res.data });
            console.log(this.state.jobs);
          });
      }

  render() {
    if (this.state.jobs) {
      let list = this.state.jobs.map(cv => {
        return (
          <div key={cv._id}>
            <Link to={"/jobs/" + cv._id}><p>{cv.position}</p></Link>
            <p>{cv.company}</p>
            <img src={cv.logoURL} alt={cv.position} />
            <p>{cv.content}</p>
            <p>{cv.location}</p>
          </div>
        )
      })
      return (
        <div className='indiv-job'>
          {list}
        </div>
      );
    }
  }
}

export default JobsList;