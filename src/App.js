import React, { Component } from 'react';
import Gravatar from './Gravatar'
import Blog from './Blog'
import Twitter from './Twitter';
import GitHub from './GitHub';
import Instagram from './Instagram'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        gravatar: {
          url: "https://s.gravatar.com/avatar/27df7a0a062537ef9116a1572707d5e0?s=200",
          alt: "Henrik Lau Eriksson"
        },
        blog: {
          url: "http://localhost:5000/api/query/BlogQuery",
        },
        github: {
          url: "http://localhost:5000/api/query/GitHubQuery",
          username: "hlaueriksson"
        },
        instagram: {
          url: "http://localhost:5000/api/query/InstagramQuery",
        }
      }
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Latest</h1>
        </div>
        <p className="App-intro">
          My latest online activities
        </p>
        <Gravatar config={this.state.config.gravatar} />
        <Blog config={this.state.config.blog} />
        <Twitter />
        <GitHub config={this.state.config.github} />
        <Instagram config={this.state.config.instagram} />
      </div>
    );
  }
}

export default App;
