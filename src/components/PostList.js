import React, { Component } from 'react';
import ShowPost from './ShowPost';

const { id } = this.props.match.params;
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  
  componentDidMount() {
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
        console.log("state", this.state.posts);
      });
  }

  fetchData = e => {
    e.preventDefault();
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ posts: data });
      });
  };

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <form onSubmit={this.fetchData}>
          <button>Update List</button>
        </form>
        <ShowPost posts={posts} />
      </div>
    );
  }
}