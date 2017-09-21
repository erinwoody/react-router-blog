import React, { Component } from 'react';
import PostList from './PostList';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
}

render() {
    let posts;
    posts = this.props.posts.map((post, index) => {
        return (
            <div key={index}>
                <p>Added By: {post.userName}</p>
                <p>Artist/Band: {post.songArtist}</p>
                <p>Title: {post.songTitle}</p>
                <p>Comments: {post.songNotes}</p>
            </div>
        )
    })

    return (
        <div className="">{posts}</div>
    );

}
}
