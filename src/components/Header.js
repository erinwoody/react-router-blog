import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const styles = {
    navStyle: {
      top: 0,
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      paddingTop: 55,
      marginBottom: 50,
      backgroundColor: "black"
    },
    listStyle: {},
    linkStyle: {
      textDecoration: "none",
      color: "grey",
      fontWeight: "bold",
      padding: 5
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
          to="/showpost"
          style={styles.linkStyle}
          activeStyle={styles.activeStyle}
        >
          Show All Posts
        </NavLink>
    </nav>    
    )
  }
}
