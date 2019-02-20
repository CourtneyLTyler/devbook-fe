import React, { Component } from 'react';
import Axios from 'axios';

class CommentCreate extends Component {
    constructor() {
        super()
        this.state = {
            content: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value },
            () => {
                console.log(this.state)
            })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        Axios.post('http://localhost:3001', this.state)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        console.log("CreateComment Fired")
    }
    render() {
        return (
            <div>
                <h1>Hello from CommentCreate Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                    <br />
                    <textarea type='text' name='content' value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default CommentCreate;