import React, { Component } from 'react';
import Twitter from './Twitter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://s.gravatar.com/avatar/27df7a0a062537ef9116a1572707d5e0?s=100" alt="Henrik Lau Eriksson" />
          <h1>Latest</h1>
        </div>
        <p className="App-intro">
          My latest online activities
        </p>
        <Twitter />
      </div>
    );
  }
}

export default App;
