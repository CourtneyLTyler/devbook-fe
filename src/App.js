import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import UserForm from "./user/UserForm";
import UserProfile from "./user/UserProfile";
import JobCreate from "./Job/JobCreate";
import JobShow from "./Job/JobShow";
import JobsList from "./Job/JobsList";
import JobUpdate from "./Job/JobUpdate";
import Home from "./Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">
            <h1>DevBook</h1>
          </Link>
          <Link to="/jobs">
            <h1>Job Posts</h1>
          </Link>
          <Link to="/user/new">
            <h1>Create Profile</h1>
          </Link>
          <Link to="/user/:id">
            <h1>My Profile</h1>
          </Link>
          <Link to="/jobs/new">
            <h1>Create A Job post</h1>
          </Link>
        </nav>

        <main>
          <Route
            path="/user/:id"
            exact
            render={routerProps => (
              <UserProfile {...routerProps} {...this.state} />
            )}
          />
          <Route
            exact
            path="/"
            render={routerProps => <Home {...routerProps} />}
          />

          <Route
            exact
            path="/user/new"
            render={routerProps => <UserForm {...routerProps} />}
          />
          <Switch>
            <Route
              exact
              path="/jobs"
              render={routerProps => <JobsList {...routerProps} />}
            />

            <Route
              exact
              path="/jobs/new"
              render={routerProps => <JobCreate {...routerProps} />}
            />

            <Route
              exact
              path="/jobs/edit/:id"
              render={routerProps => <JobUpdate {...routerProps} />}
            />

            <Route
              exact
              path="/jobs/:id"
              render={routerProps => <JobShow {...routerProps} />}
            />
          </Switch>
          {/* <Route
              exact
              path="/Login"
              render={routerProps => <Login {...routerProps} />}
            /> */}
        </main>
      </div>
    );
  }
}

export default App;
