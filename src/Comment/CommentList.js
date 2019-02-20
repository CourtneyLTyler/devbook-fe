import React, { Component } from 'react';

class CommentList extends Component {
    render() {
        const comments = this.props.comments.map(item => {
            return (
                <div className='indiv-comment' key={item._id}>
                    <p>Comment: {item.content}</p>
                    <p>Comment ID: {item._id}</p>
                    <p>Likes: {item.likes}</p>
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