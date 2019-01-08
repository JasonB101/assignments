import React from "react"

const Controls = ({button}) => {
    const buttonComponents = button.map((x, i) => {
        return <button className="button" key={i} {...x}>{x.title}</button>
    })
    return (
        <div className="controls">
            {buttonComponents}
        </div>
    )
}

export default Controls