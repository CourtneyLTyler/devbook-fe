import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class JobShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }

    componentDidMount() {
        axios.get('/api/job/' + this.props.match.params.id)
          .then((res) => {
            this.setState({
                job: res.data
             });
          })
          .catch((err) => {
            console.log(err)
          })
      }

      delete(id){
        console.log(id);
        axios.delete('/api/job/'+id)
          .then((res) => {
            this.props.history.push("/")
          });
      }
    
    render() {
        return (
            <div key={this.state.job.position}>
                <h1>Position: {this.state.job.position}</h1>
                <h2>Company: {this.state.job.company}</h2>
                <p>{this.state.job.logoURL}</p>
                <p>Info: {this.state.job.content}</p>
                <Link to={`/edit/${this.state.job._id}`}>
                    <button value="update" type="update">Update</button>
                </Link>
                <button value="delete" type="submit"onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default JobShow;
