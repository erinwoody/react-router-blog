import React, { Component } from 'react';

export default class ShowPost extends Component {

  render() {
    let posts;
    posts = this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          <p>Author: {post.authorsName}</p>
          <p>Title: {post.blogTitle}</p>
          <p>Blog Post: {post.blogEntry}</p>
        </div>
      )
    })

    return (
      <div>{posts}</div>
    );

  }
}
