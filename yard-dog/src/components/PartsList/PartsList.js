import React from 'react'
import Styles from "./PartsList.module.css"
import Part from "../Part/Part"

function PartsList(props) {
    const parts = props.parts.map((x, i) => <Part key={i}{...x}/>)
    return (
        <div className={Styles.partsList}>
            {parts}
        </div>
    )
}

export default PartsList
