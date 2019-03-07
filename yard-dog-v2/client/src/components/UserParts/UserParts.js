import React from 'react'
import { withContext } from "../DataHandler"
import { withRouter } from "react-router-dom"

import Part from "../Part/Part"

const UserParts = (props) => {

const vehicles = props.savedParts.map((x, i) => {
            return <Part key={i} {...x} {...props.saves} />
        })
        return (
            <div>
                {vehicles}
            </div>
        )
    
}



export default withRouter(withContext(UserParts))