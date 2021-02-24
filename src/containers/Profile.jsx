import React, { Component } from 'react'
import './Profile.css'

const ghUsername = 'bostoy'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: {},
            isLoading: true,
        }
    }
    async componentDidMount() {
        const profileData = await fetch(`https://api.github.com/users/${ghUsername}`)
        const profileDataJSON = await profileData.json()

        if (profileDataJSON) {
            this.setState({
                data: profileDataJSON,
                isLoading: false,
            })
        }
    }
    render() {
        return (<div></div>)
    }
}

