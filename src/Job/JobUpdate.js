import React, { Component } from 'react';
import axios from 'axios'
import './Job.css'

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
        console.log('http://localhost:3001/jobs/' + this.props.match.params.id)
        axios.get('http://localhost:3001/jobs/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    job: res.data
                })
                console.log(this.state.job)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // onChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    //   }

    onChange = (e) => {
        const state = this.state.job
        state[e.target.name] = e.target.value;
        this.setState({ job: state });
    }

    // not sure why the .catch won't work
    onSubmit = (e) => {
        e.preventDefault();
        const { position, company, logoURL, content, location } = this.state.job
        // should I have this as axios.post??
        axios.put('http://localhost:3001/jobs/' + this.props.match.params.id, { position, company, logoURL, content, location })
            .then((res) => {
                console.log(res)
                // the route to the job show
                this.props.history.push('/jobs/' + this.props.match.params.id)
            });
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    render() {
        const { position, company, logoURL, content, location } = this.state.job
        return (
            <div className='indiv-job'>
                <h3>Edit Job Post</h3>
                <form onSubmit={this.onSubmit}>
                    <label >Position:</label>
                    <input type="text" name="position" value={position} onChange={this.onChange}
                    />
                    <label >Company:</label>
                    <input type="text" name="company" value={company} onChange={this.onChange}
                    />
                    <label >Logo URL:</label>
                    <input type="text" name="logoURL" value={logoURL} onChange={this.onChange}
                    />
                    <label >Content:</label>
                    <input type="text" name="content" value={content} onChange={this.onChange}
                    />
                    <label >Location:</label>
                    <input type="text" name="location" value={location} onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default JobUpdate;