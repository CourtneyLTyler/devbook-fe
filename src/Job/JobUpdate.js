import React, { Component } from 'react';
import axios from 'axios'

class JobUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          job: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

    componentDidMount() {
        axios.get('http://localhost:3001/jobs'+ this.props.match.params.id)
        .then(res => {
            this.setState({
                job: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
    onSubmit = (e) => {
        e.preventDefault();
        const { position, company, logoURL, content, location } = this.state.book

        axios.put('http://localhost:3001/jobs/'+this.props.match.params.id, { position, company, logoURL, content, location })
            .then((res) => {
            console.log(res)
            // the route to the job show
            this.props.history.push("http://localhost:3001/jobs/"+this.props.match.params.id)
        });
    }

    render() {
        return (
            <div>
                <h3>Edit Job Post</h3>
                <form onSubmit={this.onSubmit}>
                    <label >Position:</label>
                    <input type="text" name="position" value={this.state.job.position} onChange={this.onChange}
                    />
                    <label >Company:</label>
                    <input type="text" name="company" value={this.state.job.company} onChange={this.onChange}
                    />
                    <label >Logo URL:</label>
                    <input type="text" name="logoURL" value={this.state.job.logoURL} onChange={this.onChange}
                    />
                    <label >Content:</label>
                    <input type="text" name="content" value={this.state.job.content} onChange={this.onChange}
                    />
                    <label >Location:</label>
                    <input type="text" name="location" value={this.state.job.location} onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default JobUpdate;