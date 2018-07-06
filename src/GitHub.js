import React, { Component } from "react";
import $ from "jquery";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        repo: null
      }
    };
  }
  componentDidMount() {
    $.get({
      url: this.props.config.url,
      success: function(data) {
        this.setState({ github: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
      <div className="GitHub social">
        <h2>GitHub</h2>
        <p>Repo: {this.getRepo()}</p>
      </div>
    );
  }
  getRepo() {
    if (this.state.github.repo) {
      try {
        return (
          <a href={this.state.github.repo.link}>
            {this.state.github.repo.name}
          </a>
        );
      } catch (e) {
        console.error(e);
      }
    }

    return <span>...</span>;
  }
}

export default GitHub;
