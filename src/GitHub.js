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
        <p>Repo: <a href={this.state.github.Repo.Link}>{this.state.github.Repo.Name}</a></p>
        <p>Commit: <a href={this.state.github.Commit.Link}>{this.state.github.Commit.Message}</a></p>
      </div>
    );
  }
}

export default GitHub;
