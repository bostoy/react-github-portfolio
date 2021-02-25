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
            repositories: [],
            isLoading: true,
        }
    }
    async componentDidMount() {

        try {
            const profileData = await fetch(`https://api.github.com/users/${ghUsername}`)
            const profileDataJSON = await profileData.json()

            if (profileDataJSON) {
                const repositories = await fetch(profileDataJSON.repos_url)
                const repoDataJSON = await repositories.json()

                this.setState({
                    data: profileDataJSON,
                    repositories: repoDataJSON,
                    isLoading: false,
                    error: ''
                })
            }
        }
        catch (error) {
            this.setState({
                isLoading: false,
                error: error.message
            })

        }
    }
    render() {
        const { data, isLoading, repositories, error } = this.state

        if (isLoading || error) {
            //todo add spinner
            return <LoadingWrapper>{isLoading ? 'Loading...' : error}</LoadingWrapper>
        }

        const items = [
            { label: 'Name', value: data.name },
            { label: 'Location', value: data.location },
            { label: 'Company', value: data.company },
            { label: 'Email', value: data.email || 'bostoycontact@gmail.com' },
            { label: 'GitHub Account', value: <Link url={data.html_url} title="GitHub URL" /> },
            { label: 'Bio', value: data.bio },
        ]

        const projects = repositories.map(repo => ({
            label: repo.name,
            value: <Link url={repo.html_url} title="GitHub URL" />
            //todo make value link  with url and title='GitHub URL' props
        }))

        return (
            <ProfileContainer>
                <ProfileAvatar src={data.avatar_url} alt="profile picture" />
                <List title="Profile" items={items} />
                <List title="Projects" items={projects} />
            </ProfileContainer>)
    }
}

