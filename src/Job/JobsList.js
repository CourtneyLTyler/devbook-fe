import React, { Component } from 'react';

class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          jobs: []
        };
      }

      componentDidMount() {
        axios.get('/ourapi/jobs')
          .then(res => {
            this.setState({ jobs: res.data });
            console.log(this.state.jobs);
          });
      }

    render() {
        if(this.state.jobs) {
        let list = this.state.jobs.map(cv => {
            return (
            <div key={cv.position}>
                <a href={"/jobs/" + cv._id}><p>{cv.position}</p></a>
                <p>{cv.company}</p>
                <img src="{cv.logoURL}"/>
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