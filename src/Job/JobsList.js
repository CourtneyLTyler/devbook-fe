import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CommentCreate from '../Comment/CommentCreate'

class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          jobsData: []
        };
      }

      componentDidMount() {
        axios.get('http://localhost:3001/jobs')
          .then(res => {
            this.setState({ jobsData: res.data });
            console.log(this.state.jobsData);
          });
          console.log("JobsList componentDidMount")
      }

      componentWillUnmount() {
        console.log("JobsList componentWillUnmount")
      }

    render() {
        if(this.state.jobsData) {
        let list = this.state.jobsData.map(cv => {
            return (
            <div key={cv._id}>
                <Link to={"/jobs/" + cv._id}><p>{cv.position}</p></Link>
                <p>{cv.company}</p>
                <img src={cv.logoURL} alt={cv.company}/>
                <p>{cv.content}</p>     
                <p>{cv.location}</p>     
                {/* make this synchronous */}
                < CommentCreate />
            </div>
            )      
        })
        return (
            <div>
                {list}
            </div>
        );}
    }
}

export default JobsList;