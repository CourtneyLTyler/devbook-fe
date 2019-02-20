import React, { Component } from 'react';
import Axios from 'axios';
// import UserForm from "./User/UserForm";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
// import JobCreate from '../src/Job/JobCreate'
// import JobShow from '../src/Job/JobShow'
import JobsList from '../src/Job/JobsList'
import CreateComment from '../src/Comment/CommentCreate'
import CommentList from './Comment/CommentList';
// import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      job: [],
      comments: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/comments')
      .then((res) => {
        console.log(res)
        this.setState({ comments: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="App">
        <p>Hello</p>


        <CreateComment />
        <Route path='/comments' render={(routerProps) =>
          <CommentList {...routerProps} {...this.state} />}
        />

      </div>
    );
  }
}

export default App;
