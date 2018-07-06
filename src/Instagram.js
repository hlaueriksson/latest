import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: null
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
        this.setState({ instagram: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidUpdate() {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "//platform.instagram.com/en_US/embeds.js";

    const node = ReactDOM.findDOMNode(this.refs.instagram);
    node.parentNode.appendChild(script);
  }
  render() {
    return (
      <div className="Instagram social" ref="instagram">
        <h2>Instagram</h2>
        {this.getPost()}
      </div>
    );
  }
  getPost() {
    if (this.state.instagram) {
      try {
        return <div dangerouslySetInnerHTML={this.getHtml()} />;
      } catch (e) {
        console.error(e);
      }
    }

    return <span>...</span>;
  }
  getHtml() {
    return { __html: this.state.instagram.html };
  }
}

export default Instagram;
