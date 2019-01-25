import React, { Component } from 'react'
import Landing from "./Landing"
import Research from "./Research/Research"
import History from "./History/History"
import { Switch, Route } from "react-router-dom"
import axios from "axios"


export default class View extends Component {
    constructor() {
        super()
        this.state = {
            history: [],
            current: {
                vin: "",
                year: "",
                make: "",
                model: "",
                series: "",
                link: "",
                parts: []
            },
            loading: true
        }
        this.getData = this.getData.bind(this)
        this.researchFromHistory = this.researchFromHistory.bind(this)
    }


    getData(vin) {
        this.setState({
            loading: true
        })
        axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`)
            .then(response => {
                const data = response.data.Results[0]
                this.setState(ps => (
                    {
                        current: {
                            vin: vin,
                            year: data.ModelYear,
                            make: data.Make,
                            model: data.Model,
                            series: data.Series,
                            parts: []
                        }
                    }
                ))
                this.getFromEbay()
            })

    }

    getFromEbay() {
        const keyword = this.state.current
        const keywords = `${keyword.year}%20%22${keyword.make}+${keyword.model}%22`

        const filters = ["categoryId=6030", "sortOrder=PricePlusShippingHighest", "itemFilter(0).name=Condition", "itemFilter(0).value=Used", "itemFilter(1).name=MaxPrice", "itemFilter(1).value=300.00", "itemFilter(2).name=HideDuplicateItems", "itemFilter(2).value=true", "itemFilter(3).name=SoldItemsOnly", "itemFilter(3).value=true", "itemFilter(4).name=FreeShippingOnly", "itemFilter(4).value=true"].reduce((sum, x, i, a) => {
            return i !== a.length - 1 ? sum + x + "&" : sum + x
        }, "")
        const url = `https://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findCompletedItems&SECURITY-APPNAME=JasonBro-TestDriv-PRD-360b9b3c7-e7c866e5&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=100&keywords=${keywords}&${filters}`
        axios.get(url).then(response => {
            this.setState(ps => (
                {
                    history:[{
                        ...ps.current,
                        parts: response.data.findCompletedItemsResponse[0].searchResult[0].item
                    }, ...ps.history],
                    current: {
                        ...ps.current,
                        parts: response.data.findCompletedItemsResponse[0].searchResult[0].item
                    },
                    loading: false
                }
            ))
        })


    }

    researchFromHistory(vehicleDetails){
        console.log(vehicleDetails)
        this.setState({
            current: {...vehicleDetails}
        })
    }

    render() {
        return (
            <div className="view">
                <Switch>
                    <Route exact path="/" component={() => <Landing {...this.state} handleClick={this.getData} />} />
                    <Route path="/research" component={() => <Research loading={this.state.loading} details={this.state.current} />} />
                    <Route path="/history" component={() => <History handleClick={this.researchFromHistory} details={this.state.history} />} />
                </Switch>
            </div>
        )
    }
}
