import React from 'react'
import { Link } from "react-router-dom"

function List({ planets }) {
    const planetlinks = planets.map((planet, i) => (
        <li key={i}>
            <Link to={{
                pathname: `/planets/${i}`,
                state: { planet }
            }}>{planet.name}</Link>
        </li>
    ))
    return (
        <ul>
            {planetlinks}
        </ul>
    )
}

export default List
