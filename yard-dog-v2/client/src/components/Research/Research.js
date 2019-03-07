import React from 'react'
import Loading from "../Loading"
import VehicleDetails from "../VehicleDetails/VehicleDetails"
import PartsList from "../PartsList/PartsList"
import Styles from "./Research.module.css"
import {withContext} from "../DataHandler"

function Research({savedCars, loading, details, saves}) {
console.log(details)
    return (
        <Loading loading={loading}>
        <span onClick={() => saves.saveCar(details)} className={Styles.heart}>{savedCars.find(x => x.year === details.year && x.make === details.make && x.model === details.model) ? "✭" : "✩"}</span>
            <VehicleDetails {...details} />
            <PartsList {...saves}{...details}/>
        </Loading>
    )
}

export default withContext(Research)
