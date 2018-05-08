import React, { Component } from 'react';
import Gravatar from './Gravatar'
import Blog from './Blog'
import Twitter from './Twitter';
import GitHub from './GitHub';
import Instagram from './Instagram'
import Spotify from './Spotify'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        gravatar: {
          url: "https://s.gravatar.com/avatar/27df7a0a062537ef9116a1572707d5e0?s=100",
          alt: "Henrik Lau Eriksson"
        },
        blog: {
          url: "https://latest-functions.azurewebsites.net/api/query/BlogQuery",
        },
        github: {
          url: "https://latest-functions.azurewebsites.net/api/query/GitHubQuery",
          username: "hlaueriksson"
        },
        instagram: {
          url: "https://latest-functions.azurewebsites.net/api/query/InstagramQuery",
        },
        spotify: {
          url: "https://open.spotify.com/embed/user/hlaueriksson/playlist/7eMrc3TgYi1JaB3OtpblWa"
        }
      }
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="wrapper">
            <Gravatar config={this.state.config.gravatar} />
            <h1>Latest</h1>
          </div>
        </div>
        <div className="wrapper">
          <p className="App-intro">My latest online activities</p>
          <Blog config={this.state.config.blog} />
          <Twitter />
          <GitHub config={this.state.config.github} />
          <Instagram config={this.state.config.instagram} />
          <Spotify config={this.state.config.spotify} />
        </div>
      </div>
    );
  }
}

export default App;
