import React, { Component } from 'react'
import './Header.css'
import Link from '../Link/Link'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link url="https://reactjs.org" title="Learn React" />
            </header>)
    }
}