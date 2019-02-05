import React from 'react'
import Styles from './VehicleDetails.module.css'

function VehicleDetails(props) {
    return (
        <div className={Styles.vehicleDetails}>
            <h2 className={Styles.vehicleYMM}>{`${props.year} ${props.make} ${props.model}`}</h2>
            {props.series ? <p className={Styles.vehicleYMM}>{props.series}</p> : null}
            <br></br>
            <hr></hr>
        </div>
    )
}

export default VehicleDetails
