import React, { Component } from 'react'
import './Profile.css'
import List from '../components/List/List'
import Link from '../components/Link/Link'


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

        const items = [
            { label: 'GitHub Account', value: <Link url={data.html_url} /> },
            { label: 'Repos Url', value: data.repos_url },
            { label: 'Name', value: data.name },
            { label: 'Company', value: data.company },
            { label: 'Location', value: data.location },
            { label: 'Email', value: data.email || 'bostoycontact@gmail.com' },
            { label: 'Bio', value: data.bio },
        ]

        return (
            <div className="profile-container">
                <img className="profile-avatar" src={data.avatar_url} alt="profile picture" />
                <List items={items} />
            </div>)
    }
}

