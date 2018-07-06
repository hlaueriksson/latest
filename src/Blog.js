import React, { Component } from "react";
import $ from "jquery";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null
    };
  }
  componentDidMount() {
    $.ajax({
      url: this.props.config.url,
      type: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      dataType: "json",
      data: JSON.stringify({}),
      success: function(data) {
        this.setState({ blog: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
      <div className="Blog social">
        <h2>Blog</h2>
        <p>Post: {this.getPost()}</p>
      </div>
    );
  }
  getPost() {
    if (this.state.blog) {
      try {
        return <a href={this.state.blog.link}>{this.state.blog.title}</a>;
      } catch (e) {
        console.error(e);
      }
    }

    return <span>...</span>;
  }
}

export default Blog;
