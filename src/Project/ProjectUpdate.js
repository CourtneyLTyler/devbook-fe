import React, { Component } from "react";
import axios from 'axios'

class ProjectUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log("http://localhost:3001/projects/" + this.props.match.params.id);
    axios
      .get("http://localhost:3001/projects/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          projects: res.data
        });
        console.log(this.state.projects);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }

  onChange = e => {
    const state = this.state.projects;
    state[e.target.name] = e.target.value;
    this.setState({ projects: state });
  };

  // not sure why the .catch won't work
  onSubmit = e => {
    e.preventDefault();
    const {
      position,
      company,
      logoURL,
      content,
      location
    } = this.state.projects;
    // should I have this as axios.post??
    axios
      .put("http://localhost:3001/projects/" + this.props.match.params.id, {
        position,
        company,
        logoURL,
        content,
        location
      })
      .then(res => {
        console.log(res);
        // the route to the projects show
        this.props.history.push("//" + this.props.match.params.id);
      });
    // .catch((err) => {
    //     console.log(err)
    // })
  };

  render() {
    const { Thumbnail, description, title, linkToRepo } = this.state.projects;
    return (
      <div>
        <h3>Edit projects Post</h3>
        <form onSubmit={this.onSubmit}>
          <label>Thumbnail:</label>
          <input
            type="text"
            name="Thumbnail"
            value={Thumbnail}
            onChange={this.onChange}
          />
          <br />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.onChange}
          />
          <br />
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
          />
          <br />
          <label>linkToRepo:</label>
          <input
            type="text"
            name="linkToRepo"
            value={linkToRepo}
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProjectUpdate;

// Projects:
//     • linkToRepo: String
//     • title: String
//     • description: String
//     • Thumbnail: String
//         § Optional
