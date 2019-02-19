import React, { Component } from 'react';

class JobsList extends Component {
    render() {
        if(this.props.jobs) {
        let list = this.props.jobs.map(cv => {
            return (
            <div key={cv.position}>
                <a href={"/jobs/" + cv._id}><p>{cv.position}</p></a>
                <p>{cv.company}</p>
                <img src="cv.logoURL"/>
                <p>{cv.content}</p>           
            </div>
            )      
        })
        return (
            <div>
                {list}
            </div>
        );}
    }
}

export default JobsList;