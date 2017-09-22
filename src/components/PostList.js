import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    let posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <p>Author: {post.authorsName}</p>
          <Link to={"/posts/" + post._id}>Blog Title: {post.blogTitle}</Link>
          <p>Blog Entry: {post.blogEntry}</p>
        </div>
      );
    });

    return <div>{posts}</div>;
  }
}
