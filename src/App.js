import React, { Component } from 'react';
// import UserForm from "./User/UserForm";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
// import JobCreate from '../src/Job/JobCreate'
// import JobShow from '../src/Job/JobShow'
import JobsList from '../src/Job/JobsList'
import CreateComment from '../src/Comment/CommentCreate'
// import axios from 'axios'

class App extends Component {

  constructor() {
    super();
    this.state = {
      job: []
    }
  }

  // componentDidMount() {
  //   axios.get(`http://www.ourapi.com/{this.props.jobid}.json`)
  //     .then((res) => {
  //       this.setState({
  //           job: res.data
  //        });
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  render() {
    return (
      <div className="App">
        <p>Hello</p>

        <CreateComment />

      </div>
    );
  }
}

export default App;
