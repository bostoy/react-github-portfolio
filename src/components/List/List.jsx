import React from 'react'
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
export default function List({ items }) {
    console.log(items)
    return <ListWrapper>
        {items.map(item => {
            return (<ListItem key={item.label}>
                <strong>{item.label}</strong>{item.value}
            </ListItem>)
        })}
    </ListWrapper>
}