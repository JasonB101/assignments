import React from 'react'
import Loading from "../Loading"
import VehicleDetails from "../VehicleDetails/VehicleDetails"
import PartsList from "../PartsList/PartsList"

function Research({loading, details}) {

    return (
        <Loading loading={loading}>
            <VehicleDetails {...details} />
            <PartsList {...details}/>
        </Loading>
    )
}

export default Research
