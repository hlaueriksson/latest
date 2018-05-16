import React, { Component } from 'react';
import $ from "jquery";

class GitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        Repo: {
          Name: "..."
        },
        Commit: {
          Message: "..."
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
      data: JSON.stringify({}),
      success: function (data) {
        this.setState({ github: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  getLinkText() {
    if (this.state.github.Commit.Repo == null) {
      return (
        <span>{this.state.github.Commit.Message}</span>
      );
    }
    return (
      <span>{this.state.github.Commit.Repo}: {this.state.github.Commit.Message}</span>
    );
  }
  render() {
    return (
      <div className="GitHub social">
        <h2>GitHub</h2>
        <p>Commit: <a href={this.state.github.Commit.Link}>{this.getLinkText()}</a></p>
      </div>
    );
  }
}

export default GitHub;
