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
import SignUpForm from "../Signup/Signup";
import LogInForm from "../Login/Login";

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }
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
            <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogin}
                  />
                );
              }}
            />
            <Route
              path="/signup"
              render={props => {
                return (
                  <Signup
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignup}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
