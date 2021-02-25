import React, { Component } from 'react'
import styled from 'styled-components'

const InnerLink = styled.a`
color: #61dafb;
`

export default class Link extends Component {
    render() {
        return (
            <InnerLink
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.label}
            </InnerLink>
        )
    }
}