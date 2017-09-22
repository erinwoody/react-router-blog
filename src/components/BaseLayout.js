import React, { Component } from "react";
import Header from './Header';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          {this.props.children}
          <footer>Blog 2017</footer>
        </div>
      </div>
    );
  }
}
