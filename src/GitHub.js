import React, { Component } from 'react';
import $ from "jquery";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        repo: {
          name: "..."
        },
        commit: {
          message: "..."
        }
      }
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.config.url,
      type: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      data: JSON.stringify({ Username: this.props.config.username }),
      success: function (data) {
        this.setState({ github: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
      <div className="GitHub social">
        <h2>GitHub</h2>
        <p>Repo: <a href={this.state.github.repo.link}>{this.state.github.repo.name}</a></p>
        <p>Commit: <a href={this.state.github.commit.link}>{this.state.github.commit.message}</a></p>
      </div>
    );
  }
}

export default GitHub;
