import React, { Component } from 'react'
import './Header.css'
import logo from '../../Logos/GitHub-Mark-Light-64px.png'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>My GitHub Portfolio</p>
            </header>)
    }
}