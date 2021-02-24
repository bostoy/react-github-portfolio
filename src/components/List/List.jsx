import React from 'react'

export default function List({ items }) {
    console.log(items)
    return <ul>
        {items.map(item => {
            return (<li key={item.label}>
                <strong>{item.label}</strong>{item.value}
            </li>)
        })}
    </ul>
}