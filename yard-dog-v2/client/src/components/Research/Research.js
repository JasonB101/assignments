import React from 'react'
import Loading from "../Loading"
import VehicleDetails from "../VehicleDetails/VehicleDetails"
import PartsList from "../PartsList/PartsList"
import Styles from "./Research.module.css"

function Research({loading, details, saves}) {

    return (
        <Loading loading={loading}>
        <span onClick={() => saves.saveCar(details)} className={Styles.heart}>❤️</span>
            <VehicleDetails {...details} />
            <PartsList {...saves}{...details}/>
        </Loading>
    )
}

export default Research
