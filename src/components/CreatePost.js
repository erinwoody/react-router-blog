import React, { Component } from "react";

export default class CreatPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsName: "",
      blogTitle: "",
      writeBlog: ""
    };
  }
  addToList = e => {
    e.preventDefault();
    this.setState({
      authorsName: e.target.value,
      blogTitle: e.target.value,
      writeBlog: e.target.value
    });

    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
    let createPost = JSON.stringify(this.state);

    fetch(
      `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`,
      {
        method: "POST",
        body: createPost,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        console.log(response, "working");
      })
      .catch(err => {
        console.log(err, "error");
      });
    this.setState({
      authorsName: "",
      blogTitle: "",
      writeBlog: ""
    });
  };

  render() {
    let { authorsName, blogTitle, writeBlog} = this.state;
    return (
      <div>
        <form onSubmit={this.addToList}>
          <div>
            <input
              name="authorsName"
              type="text"
              value={authorsName}
              placeholder="Enter your name or email address"
              onChange={this.handleInputChange}
            /> <br/>
            <input
              name="blogTitle"
              type="text"
              value={blogTitle}
              placeholder="Title"
              onChange={this.handleInputChange}
            /> <br/>
            <input
              name="writeBlog"
              type="text"
              value={writeBlog}
              placeholder="Write your post here"
              onChange={this.handleInputChange}
            /> <br/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
