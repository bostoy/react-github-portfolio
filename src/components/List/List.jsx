import React, { Fragment } from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
list-style = none;
text-align:left;
padding: 0;
`
const ListItem = styled.li`
display:flex;
justify-content: space-between;
`
const Title = styled.h2`
padding:10px 0;
border-bottom:1px solid lightGrey;
`
export default function List(props) {

    return (
        <Fragment>
            <Title>{props.title}</Title>
            <ListWrapper>
                {props.items.map(item =>
                    <ListItem key={item.label}>
                        <label>{item.label}</label>{item.value}
                    </ListItem>
                )}
            </ListWrapper>
        </Fragment>
    )
}