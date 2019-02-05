import React, { Component } from 'react'
import Landing from "./Landing/Landing"
import Research from "./Research/Research"
import History from "./History/History"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import MyAccount from "./MyAccount/MyAccount"
import { Switch, Route } from "react-router-dom"
import axios from "axios"


export default class View extends Component {
    constructor() {
        super()
        this.state = {
            searchHistory: [],
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
       

    }

    researchFromHistory(vehicleDetails){
        this.setState({
            current: {...vehicleDetails}
        })
    }

    render() {
        return (
            <div className="view">
                <Switch>
                    <Route path="/auth/signup" component={(props) => <Signup {...this.state} {...props}/>}/>
                    <Route path="/auth/login" component={(props) => <Login {...this.state} {...props}/>}/>
                    <Route exact path="/research" component={() => <Landing {...this.state} handleClick={this.getData} />} />
                    <Route exact path="/myaccount" component={(props) => <MyAccount {...props} {...this.state} />} />
                    <Route path="/research/results" component={() => <Research loading={this.state.loading} details={this.state.current} />} />
                    <Route path="/history" component={() => <History handleClick={this.researchFromHistory} details={this.state.searchHistory} />} />
                </Switch>
            </div>
        )
    }
}
