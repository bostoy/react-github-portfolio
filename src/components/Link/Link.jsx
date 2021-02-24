import React, { Component } from 'react'
import './Link.css'

export default class Link extends Component {
    render() {
        return (
            <a
                className="App-link"
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.title}
            </a>
        )
    }
}