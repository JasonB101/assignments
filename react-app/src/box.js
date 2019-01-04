import React from "react"

const Box = ({title, info, subtitle, ...props}) => {
    return (
        <div {...props}>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
            <p>{info}</p>

        </div>
    )
}

export default Box