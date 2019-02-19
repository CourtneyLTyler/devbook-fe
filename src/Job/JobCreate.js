import React, { Component } from 'react';
import axios from 'axios'

class JobCreate extends Component {

    constructor() {
        super();
        this.state = {
        position: '',
        company: '',
        logoURL: '',
        content: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { position, company, logoURL, content } = this.state;

        axios.post('/', { position, company, logoURL, content })
          .then((result) => {
              console.log(result)
            //access the results here....
          });
      }

    render() {
        const { position, company, logoURL, content } = this.state
        return (
            <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="position"
              value={position}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="logoURL"
              value={logoURL}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="content"
              value={content}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
            </form>

        );
    }
}

export default JobCreate;

// Jobs:
//     • content: String
//     • position: String
//     • company: String
//     • location: String
//     • companyLogo: String (Op)
//     • user: 
//         § userId: [ Linked Model ]
//         § userName: [ Linked Model ]
//     • createdAt:
//         ▪ Type: Date
//         ▪ Default: Date.now()
