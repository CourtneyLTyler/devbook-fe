import React, { Component } from 'react';
import './Comments.css'
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
class CommentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/comments')
            .then(item => {
                this.setState({ comments: item.data });
                console.log(this.state.comments);
            });
    }

    render() {
        const comments = this.state.comments.map(item => {
            return (
                <div className='indiv-comment' key={item._id}>
                    <p>Comment: {item.content}</p>
                    <p>Comment ID: {item._id}</p>
                    <p>Likes: {item.likes}</p>
                    <Link to={`/comments/edit/${item._id}`}>
                        <button>Update</button>
                    </Link>
                    <button>Delete</button>
                </div>
            )
        })
        return (
            <div className='indiv-comment'>
                {comments}
            </div>
        );
    }
}

export default CommentList;