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
        console.log('http://localhost:3001/jobs/'+this.props.match.params.id)
        axios.get('http://localhost:3001/jobs/'+ this.props.match.params.id)
        .then(res => {
            this.setState({
                job: res.data
            })
            console.log("update component mount" + this.state)
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
        const { position, company, logoURL, content, location } = this.state.job
// should I have this as axios.post??
        axios.put('http://localhost:3001/jobs/'+this.props.match.params.id, { position, company, logoURL, content, location })
            .then((res) => {
            console.log(res)
            // the route to the jobs list
            this.props.history.push("/jobs/")
        });
        // .catch((err) => {
        //     console.log(err)
        // })

    }




    render() {
        const { position, company, logoURL, content, location } = this.state
        return (
            <div>
                <h3>Edit Job Post</h3>
                <form onSubmit={this.onSubmit}>
                    <label >Position:</label>
                    <input type="text" name="position" value={position} placeholder={position} onChange={this.onChange}
                    />
                    <label >Company:</label>
                    <input type="text" name="company" value={company} placeholder={company}  onChange={this.onChange}
                    />
                    <label >Logo URL:</label>
                    <input type="text" name="logoURL" value={logoURL} placeholder={logoURL}  onChange={this.onChange}
                    />
                    <label >Content:</label>
                    <input type="text" name="content" value={content} placeholder={content}  onChange={this.onChange}
                    />
                    <label >Location:</label>
                    <input type="text" name="location" value={location} placeholder={location}  onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default JobUpdate;