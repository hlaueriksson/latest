import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Twitter extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//platform.twitter.com/widgets.js';
    script.charset = 'utf-8';

    const node = ReactDOM.findDOMNode(this.refs.twitter);
    node.parentNode.appendChild(script);
  }
  render() {
    return (
      <div className="Twitter social" ref="twitter">
        <h2>Twitter</h2>
        <a className="twitter-timeline"
          href="https://twitter.com/hlaueriksson"
          data-chrome="noheader nofooter noborders"
          data-tweet-limit="1">Tweets by hlaueriksson</a>
      </div>
    );
  }
}

export default Twitter;
