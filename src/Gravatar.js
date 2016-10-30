import React, { Component } from 'react';

class Gravatar extends Component {
  render() {
    return (
      <div className="Gravatar">
        <h2>Gravatar</h2>
        <img src={this.props.config.url} alt={this.props.config.alt} />
      </div>
    );
  }
}

export default Gravatar;
