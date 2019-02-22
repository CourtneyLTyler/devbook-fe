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
import ProjectList from "./Project/ProjectList";
import ProjectCreate from "./Project/ProjectCreate";
import ProjectUpdate from "./Project/ProjectUpdate";
import ProjectShow from "./Project/ProjectShow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 class="nav-link active">DevBook</h1>
        </Link>
        <span />
        <br />
        <nav class="nav nav-pills nav-fill nav justify-content-center van">
          <Link to="/jobs/new">
            <a class="nav-link active">Create Job Post</a>
          </Link>
          <br />
          <span />

          <Link to="/jobs">
            <a class="nav-link active">Posted Job</a>
          </Link>
          <br />

          <Link to="/user/new">
            <a class="nav-link active">Create User Profile</a>
          </Link>
          <br />

          <Link to="/user/:id">
            <a class="nav-link active">User Profile</a>
          </Link>
          <br />

          <Link to="/projects/new">
            <a class="nav-link active">Create Project Posts</a>
          </Link>
          <br />

          <Link to="/projects">
            <a class="nav-link active">Show Projects</a>
          </Link>
          <br />
        </nav>

        <main>
          <Route
            exact
            path="/user/:id"
            exact
            render={routerProps => <UserProfile {...routerProps} />}
          />

          <Route
            exact
            path="/"
            render={routerProps => <Home {...routerProps} />}
          />

          <Route
            exact
            path="/projects"
            render={routerProps => <ProjectList {...routerProps} />}
          />

          <Route
            exact
            path="/projects/new"
            render={routerProps => <ProjectCreate {...routerProps} />}
          />

          <Route
            exact
            path="/projects/edit/:id"
            render={routerProps => <ProjectUpdate {...routerProps} />}
          />

          <Route
            exact
            path="/projects/:id"
            render={routerProps => <ProjectShow {...routerProps} />}
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
        </main>
      </div>
    );
  }
}

export default App;
