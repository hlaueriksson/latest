import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instagram: {}
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
                this.setState({ instagram: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    createMarkup() {
        return { __html: this.state.instagram.html };
    }
    render() {
        return (
            <div className="Instagram social" ref="instagram">
                <h2>Instagram</h2>
                <div dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
        );
    }
    componentDidUpdate() {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = '//platform.instagram.com/en_US/embeds.js';

        const node = ReactDOM.findDOMNode(this.refs.instagram);
        node.parentNode.appendChild(script);
    }
}

export default Instagram;
