import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Job.css";

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/projects").then(res => {
      this.setState({ projects: res.data });
      console.log(this.state.projects);
    });
  }

  render() {
    if (this.state.projects) {
      let list = this.state.projects.map(cv => {
        return (
          <div key={cv._id}>
            <Link to={"/projects/" + cv._id}>
              <p>{cv.title}</p>
            </Link>
            <p>{cv.company}</p>
            <img src="{cv.logoURL}" alt="Company Logo" />
            <p>{cv.content}</p>
            <p>{cv.location}</p>
          </div>
        );
      });
      return <div className="indiv-job">{list}</div>;
    }
  }
}

export default JobsList;
