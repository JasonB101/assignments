import React, { Component } from 'react'
import Landing from "./Landing/Landing"
import Research from "./Research/Research"
import History from "./History/History"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import MyAccount from "./MyAccount/MyAccount"
import UserCars from "./UserCars/UserCars"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import ProtectedRoute from "./Auth/ProtectedRoute"
const researchAxios = axios.create()

researchAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

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
        this.savePart = this.savePart.bind(this)
        this.saveCar = this.saveCar.bind(this)
        this.researchFromHistory = this.researchFromHistory.bind(this)
    }


    getData(searchData) {
        this.setState({
            loading: true
        })
        const url = searchData.vin ? "/api/research/vin" : "/api/research/ymm"
        researchAxios.post(url, searchData)
            .then(carData => {
                this.setState(ps => (
                    {
                        searchHistory: [carData.data, ...ps.searchHistory],
                        current: {
                            ...carData.data
                        },
                        loading: false
                    }
                ))
            })
    }

    savePart(id) {
        const partData = this.state.current.parts.find(x => {
            return x.partID === id
        })
        researchAxios.post("/api/save/part", partData)
            .then(() => {
                this.setState(ps => ({
                    current: {
                        ...ps.current,
                        parts: ps.current.parts.filter((x, i, a) => {
                            return x.partID !== partData.partID
                        })
                    }
                }))
            })
    }

    saveCar(data) {
        const carData = data
        delete carData.parts
        researchAxios.post("/api/save/car", carData)
        console.log(carData)
    }

    researchFromHistory(vehicleDetails) {
        this.setState({
            current: { ...vehicleDetails }
        })
    }

    render() {
        return (
            <div className="view">
                <Switch>
                    <Route path="/auth/signup" component={(props) => <Signup {...this.state} {...props} />} />
                    <Route path="/auth/login" component={(props) => <Login {...this.state} {...props} />} />
                    <ProtectedRoute exact path="/research" component={() => <Landing {...this.state} handleClick={this.getData} />} />
                    <ProtectedRoute exact path="/myaccount" component={(props) => <MyAccount {...props} {...this.state} />} />
                    <ProtectedRoute exact path="/myaccount/saves" component={(props) => <MyAccount {...props} {...this.state} />} />
                    <ProtectedRoute path="/myaccount/saves/cars" component={(props) => <UserCars handleClick={this.researchFromHistory} {...props}/>} />
                    <ProtectedRoute path="/myaccount/saves/parts" component={(props) => <UserCars handleClick={this.researchFromHistory} {...props}/>} />
                    <ProtectedRoute path="/research/results" component={() => <Research loading={this.state.loading} saves={{ savePart: this.savePart, saveCar: this.saveCar }} details={this.state.current} />} />
                    <Route path="/research/history" component={() => <History handleClick={this.researchFromHistory} details={this.state.searchHistory} />} />
                </Switch>
            </div>
        )
    }
}
