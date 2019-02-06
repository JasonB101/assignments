import React from 'react'
import {withContext} from "../DataHandler"
import {withRouter, Link} from "react-router-dom"

import VehicleDetails from "../VehicleDetails/VehicleDetails"

class UserCars extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
        this.props.getSavedCars()
    }
    
    render() {
        const vehicles = this.props.savedCars.map((x, i) => {
            return <Link key={i} onClick={() => this.props.handleClick(x)} to="/research/results"><VehicleDetails  {...x} /></Link>
        })
        return (
            <div>
                {vehicles}
            </div>
        )
    }
}
   
   

export default withRouter(withContext(UserCars))