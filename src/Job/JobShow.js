import React, { Component } from 'react';
import axios from 'axios'

class JobShow extends Component {

    constructor() {
        super();
        this.state = {
            job = []
        }
    }


    // syntax error
    componentDidMount() {
        axios.get(`http://www.ourapi.com/{this.props.jobid}.json`)
          .then((res) => {
            this.setState({
                job = res.data
             });
          });
          .catch((err) => {
            console.log(err)
          })
      }
    
    

    render() {
        return (
            <div key={this.state.job.position}>
            <h1>{this.state.job.position}</h1>
            <h2>{this.state.job.company}</h2>
            <p>{this.state.job.logoURL}</p>
            <p>{this.state.job.content}</p>
            <Link to="/">
           <a href="/"> <button value="delete" type="submit"onClick={this.handleDelete}>Delete</button></a>
            </Link>
        </div>
        );
    }
}

export default JobShow;