import React, { Component } from 'react';

class Spotify extends Component {
  render() {
    return (
      <div className="Spotify social">
        <h2>Spotify</h2>
        <iframe src={this.props.config.url} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Latest"></iframe>
      </div>
    );
  }
}

export default Spotify;
