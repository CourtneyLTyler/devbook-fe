import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ProjectCreate from "../Project/ProjectCreate";
import CommentCreate from '../Comment/CommentCreate'
import CommentList from '../Comment/CommentList'
class ProjectShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      devPostId: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/projects/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          projects: res.data,
          devPostId: res.data._id
        });
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

  //   handleDelete(){
  //     console.log("deleting" + this.props.match.params.id);
  //     axios.delete('http://localhost:3001/projects/'+ this.props.match.params.id)
  //       .then((res) => {
  //         console.log(res.data)
  //         this.context.history.push("/projects")
  //         this.setState({
  //             projects: {}
  //         })
  //       });
  //     //   .catch((err)=> {
  //     //     console.log(err)
  //     //   })
  //   }

  handleDelete = e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3001/projects/${this.state.projects._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          projects: {}
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.state.projects)
    // console.log(this.state.devPostId)
    return (
      <div key={this.state.projects.position}>
        <h1>Title: {this.state.projects.title}</h1>
        <h2>Description: {this.state.projects.description}</h2>
        <p>Thumbnail: {this.state.projects.Thumbnail}</p>
        <p>linkToRepo: {this.state.projects.linkToRepo}</p>

        <Link to={`/projects/edit/${this.state.projects._id}`}>
          <button value="update" type="update">
            Update
          </button>
        </Link>
        <Link to="/projects">
          <button value="delete" type="submit" onClick={this.handleDelete}>
            Delete
          </button>
        </Link>
        <CommentList projects={this.state.projects} />
        <CommentCreate devPostId={this.state.devPostId} />
      </div>
    );
  }
}
export default ProjectShow;

// Projects:
//     • linkToRepo: String
//     • title: String
//     • description: String
//     • Thumbnail: String
//         § Optional
