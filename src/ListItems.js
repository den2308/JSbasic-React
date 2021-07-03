import React from 'react'

const ListItems = ({ name, lastName, showName }) => (
    <li onClick={() => { showName(name) }}>{name} {lastName}</li>
)

export default ListItems
