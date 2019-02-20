import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'

const apiURL = 'https://devbook-backend.herokuapp.com/'

class JobShow extends Component {

    constructor() {
        super();
        this.state = {
            job: []
        }
    }

    componentDidMount() {
        const jobid = this.props.match.params.id
        const url = `${apiURL}${jobid}`

        axios.get(url)
          .then((res) => {
            this.setState({
                job: res.data
             });
          })
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
                {/* <Link to="/updatejobs">
                    <a href="/updatejobs"> <button value="update" type="update">Update</button></a>
                </Link>
                <Link to="/">
                    <a href="/"> <button value="delete" type="submit"onClick={this.handleDelete}>Delete</button></a>
                </Link> */}
            </div>
        );
    }
}

export default JobShow;