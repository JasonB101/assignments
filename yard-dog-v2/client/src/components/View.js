import React, { Component } from 'react'
import Landing from "./Landing/Landing"
import Research from "./Research/Research"
import History from "./History/History"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import MyAccount from "./MyAccount/MyAccount"
import UserCars from "./UserCars/UserCars"
import UserParts from "./UserParts/UserParts"
import { Switch, Route } from "react-router-dom"
import {withContext} from "./DataHandler"
import axios from "axios"
import ProtectedRoute from "./Auth/ProtectedRoute"
const researchAxios = axios.create()

researchAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class View extends Component {
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
        this.delPart = this.delPart.bind(this)
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
            .then((err) => {
                this.props.getSavedParts()
                if (err) {
                 console.log(err)   
                }

            })
    }
    delPart(id) {
        
        researchAxios.delete(`/api/delete/part/${id}`)
            .then((err) => {
                this.props.getSavedParts()
                if (err) {
                 console.log(err)   
                }

            })
    }

    saveCar(data) {
        const carData = data
        researchAxios.post("/api/save/car", carData)
        .then((err) => {
            this.props.getSavedCars()
            if (err) {
             console.log(err)   
            }

        })
    }

    researchFromHistory(vehicleDetails) {
        this.setState({
            current: { ...vehicleDetails }
        }, this.getData(vehicleDetails))
        
        
    }

    render() {
        return (
            <div className="view">
                <Switch>
                    <Route path="/auth/signup" component={(props) => <Signup {...this.state} {...props} />} />
                    <Route path="/auth/login" component={(props) => <Login {...this.state} {...props} />} />
                    <ProtectedRoute exact path="/research" component={() => <Landing {...this.state} handleClick={this.getData} />} />
                    <ProtectedRoute exact path="/myaccount" component={(props) => <MyAccount {...props} {...this.state} />} />
                    <ProtectedRoute exact path="/myaccount/saves" component={(props) => <MyAccount {...props} {...this.state}  />} />
                    <ProtectedRoute path="/myaccount/saves/cars" component={(props) => <UserCars handleClick={this.researchFromHistory} {...props}/>} />
                    <ProtectedRoute path="/myaccount/saves/parts" component={(props) => <UserParts {...props} saves={{ savePart: this.savePart, saveCar: this.saveCar, delPart: this.delPart }}/>} />
                    <ProtectedRoute path="/research/results" component={() => <Research loading={this.state.loading} saves={{ savePart: this.savePart, saveCar: this.saveCar, delPart: this.delPart }} details={this.state.current} />} />
                    <Route path="/research/history" component={() => <History handleClick={this.researchFromHistory} details={this.state.searchHistory} />} />
                </Switch>
            </div>
        )
    }
}

export default withContext(View)