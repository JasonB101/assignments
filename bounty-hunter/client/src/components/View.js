import React from 'react'
import BountyDetail from "./BountyDetail"

function View(props) {
    const results = props.results[0] ? props.results.map((x, i) => <BountyDetail handleClick={props.handleClick} edit={props.edit}refresh={props.refresh} key={i} {...x} /> ) : <p>Nothing to display...</p>
    return (
        <div className="view">
            <div className="controlPanel">
                <button onClick={props.handleClick} className="controlButton">+</button>
                <div className="spacer"></div>
                <button className="controlButton" onClick={props.refresh}>↻</button>
                
            </div>
            <hr></hr>
            <div>
                {results}
            </div>
        </div>
    )
}

export default View
