import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from './BaseLayout';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/createpost" component={CreatePost} />
            <Route path="/posts/:id" component={ShowPost} />
            <Route path="/posts" component={PostList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
