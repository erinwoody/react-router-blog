import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/createpost" component={CreatePost} />
            <Route path="/postlist" component={PostList} />
            <Route path="/showpost" component={ShowPost} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
