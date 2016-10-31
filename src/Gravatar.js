import React, { Component } from 'react';

class Gravatar extends Component {
  render() {
    return (
      <div className="Gravatar">
        <img src={this.props.config.url} alt={this.props.config.alt} />
      </div>
    );
  }
}

export default Gravatar;
