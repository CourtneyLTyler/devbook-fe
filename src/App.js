import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import UserForm from "./User/UserForm";
import JobCreate from "../src/Job/JobCreate";
import JobShow from "../src/Job/JobShow";
import JobsList from "../src/Job/JobsList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      job: []
    };
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
        <UserForm />
        <Route
          path="/jobs"
          render={routerProps => (
            <JobsList jobs={this.state.jobs} {...routerProps} {...this.state} />
          )}
        />
        <h4>
          <Link to="/job/create">Create A Job post</Link>
        </h4>
      </div>
    );
  }
}

export default App;
