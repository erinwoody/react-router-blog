import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const styles = {
    navStyle: {
      display: "flex",
      width: "100%",
      paddingTop: 10,
      backgroundColor: "black"
    },
    listStyle: {},
    linkStyle: {
      textDecoration: "none",
      color: "grey",
      fontWeight: "bold",
      padding: 20,
      fontSize: 20
    },
    activeStyle: {
      backgroundColor: "black",
      color: "white"
    }
  };

export default class Header extends Component {
  render() {
    return (
        <nav style={styles.navStyle}>
        <NavLink
          exact
          to="/"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/createpost"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Create Post
        </NavLink>
        <NavLink
          to="/posts"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Post List
        </NavLink>
    </nav>    
    )
  }
}
