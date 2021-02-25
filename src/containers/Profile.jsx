import React, { Component } from 'react'
import styled from 'styled-components'
import List from '../components/List/List'
import Link from '../components/Link/Link'

const LoadingWrapper = styled.div`
//todo
`
const ProfileContainer = styled.div`
width:70%;
margin:10px auto;
`
const ProfileAvatar = styled.img`
width:150px;
border-radius:50%;
`
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
            //todo add spinner
            return <LoadingWrapper>Loading...</LoadingWrapper>
        }

        const items = [
            { label: 'Name', value: data.name },
            { label: 'Location', value: data.location },
            { label: 'Company', value: data.company },
            { label: 'Email', value: data.email || 'bostoycontact@gmail.com' },
            { label: 'GitHub Account', value: data.html_url },
            { label: 'Repos Url', value: data.repos_url },
            { label: 'Bio', value: data.bio },
        ]

        return (
            <ProfileContainer>
                <ProfileAvatar src={data.avatar_url} alt="profile picture" />
                <List items={items} />
            </ProfileContainer>)
    }
}

