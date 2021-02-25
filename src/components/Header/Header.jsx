import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../GitHub-Mark-Light-64px.png'

const HeaderWrapper = styled.div`
 background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Logo = styled.img`
padding:10px;
 height: 64px;
  pointer-events: none;
`

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo src={logo} alt="logo" />
                <p>My GitHub Portfolio</p>
            </HeaderWrapper>)
    }
}