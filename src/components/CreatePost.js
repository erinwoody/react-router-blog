import React, { Component } from "react";

export default class CreatPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      blogTitle: "",
      blogEntry: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createPost = e => {
    e.preventDefault();
    this.setState({
      authorName: e.target.value,
      blogTitle: e.target.value,
      blogEntry: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "It Works!");
      })
      .catch(err => {
        console.log(err, "Error!");
      });
    this.setState({ authorName: "", blogTitle: "", blogEntry: "" });
  };

  render() {
    let { authorsName, blogTitle, blogEntry } = this.state;
    return (
      <div>
        <h1>New Blog Post</h1>  
        <form className="blogEntryForm" onSubmit={this.createPost}>
          <div> <p>Author's Name</p>
            <input className= "blogInput"
              name="authorsName"
              type="text"
              value={authorsName}
              placeholder="Enter your name or email address"
              onChange={this.handleInputChange}
            />{" "}
            <br /> <p>Blog Title</p>
            <input className= "blogInput"
              name="blogTitle"
              type="text"
              value={blogTitle}
              placeholder="Title"
              onChange={this.handleInputChange}
            />{" "}
            <br /> <p>Blog Entry</p>
            <textarea className= "blogInput"
              name="blogEntry"
              type="text"
              value={blogEntry}
              placeholder="Write your post here"
              onChange={this.handleInputChange}
            ></textarea>{" "}
            <br />
          </div>
          <button className="form-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
