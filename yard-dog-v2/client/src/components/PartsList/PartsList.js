import React from 'react'
import Styles from "./PartsList.module.css"
import Part from "../Part/Part"

function PartsList(props) {
    const parts = props.parts.map((x, i) => {

        return <Part key={i}{...x}{...props} />
    })
    return (
        <div className={Styles.partsList}>
            {parts}
        </div>
    )
}

export default PartsList
