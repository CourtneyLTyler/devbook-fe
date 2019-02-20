import React, { Component } from 'react';
import axios from 'axios'

class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          jobs: []
        };
      }

      componentDidMount() {
        axios.get('http://localhost:3001/jobs')
          .then(res => {
            this.setState({ jobs: res.data });
            console.log(this.state.jobs);
          });
      }

    render() {
        if(this.state.jobs) {
        let list = this.state.jobs.map(cv => {
            return (
            <div key={cv.position}>
                <a href={"http://localhost:3001/jobs/" + cv._id}><p>{cv.position}</p></a>
                <p>{cv.company}</p>
                <img src="{cv.logoURL}"/>
                <p>{cv.content}</p>     
                <p>{cv.location}</p>        
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