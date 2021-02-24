import React, { Component, Fragment } from 'react'
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
        const { data, isLoading } = this.state
        if (isLoading) {
            return <div className="loading-div">Loading...</div>
        }
        return (
            <div className="profile-container">
                <img className="profile-avatar" src={data.avatar_url} />
                <ul>
                    <li>GitHub: {data.html_url}</li>
                    <li>Repos Url: {data.repos_url}</li>
                    <li>Name: {data.name}</li>
                    <li>Company: {data.company}</li>
                    <li>Location: {data.location}</li>
                    <li>Email: {data.email}</li>
                    <li>Bio: {data.bio}</li>

                </ul>
            </div >)
    }
}

