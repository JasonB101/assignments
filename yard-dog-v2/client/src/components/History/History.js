import React from 'react'
import VehicleDetails from "../VehicleDetails/VehicleDetails"
import Styles from "./History.module.css"
import { Link } from "react-router-dom"

function History({ details, handleClick }) {
    const vehicles = details.map(x => {
        return x.vin ? <Link key={x.vin} onClick={() => handleClick(x)} to="research/results"><VehicleDetails  {...x} /></Link> : null
    })
    return (
        <div className={Styles.historyWrapper}>
            {vehicles.length > 0 ? vehicles : <p>No History to display...</p>}
        </div>
    )
}

export default History
