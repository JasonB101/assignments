import React from 'react'

function View(props) {
    console.log(props)
    return (
        <div className="view">
            <div className="controlPanel">
                <button className="controlButton">+</button>
                <div className="spacer"></div>
                <button className="controlButton" onClick={props.refresh}>↻</button>
                
            </div>
            <hr></hr>
            <div>
                <p>{props.results[0] ? props.results[0].fname : "Nothing Here"}</p>
            </div>
        </div>
    )
}

export default View
