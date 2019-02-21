import React, { Component } from 'react';
import './Comments.css'
import { Route, Link, Switch } from 'react-router-dom'
class CommentList extends Component {
    render() {
        const comments = this.props.comments.map(item => {
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
            <div>
                {comments}
            </div>
        );
    }
}

export default CommentList;