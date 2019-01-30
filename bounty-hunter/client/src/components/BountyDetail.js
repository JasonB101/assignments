import React from 'react'
import { deleteRequest } from "../axiosHandler"

function BountyDetail({ handleClick, refresh, fname, lname, killed, price, type, _id, edit }) {
    return (
        <div className="bountyDetails">
            <p>{`${fname} ${lname}`}</p>
            <p>{killed ? "Terminated" : "Living"}</p>
            <p className="green">{`Bounty Price: ${price}`}</p>
            <p>{`Allegiance: ${type}`}</p>
            <div className="spacer"></div>
            <button onClick={(e) => {
                edit(_id)
                handleClick()
             }}>Edit</button>
            <button onClick={(e) => {
                deleteRequest(_id)
                refresh()
             }}>Delete</button>
        </div>
    )
}

export default BountyDetail
