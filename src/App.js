import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import UserForm from "./user/UserForm";
import CreateComment from '../src/Comment/CommentCreate'
import CommentList from './Comment/CommentList';
import JobCreate from "../src/Job/JobCreate";
import JobShow from "../src/Job/JobShow";
import JobsList from "../src/Job/JobsList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      job: [],
      comments: []
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

  componentDidMount() {
    axios.get('http://localhost:3001/comments')
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
        <UserForm />
        <Route
          path="/jobs"
          render={routerProps => (
            <JobsList jobs={this.state.jobs} {...routerProps} {...this.state} />
          )}
        />
        <Route path='/jobs/new' render={(routerProps) => <JobCreate {...routerProps} {...this.state}/>}/>
        <h4>
          <Link to="/jobs/new">Create A Job post</Link>
        </h4>
        
      </div>
    );
  }
}

export default App;
