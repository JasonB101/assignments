import React, { Component } from 'react'
import View from "./View"
import axios from "axios"
import Form from "./Form"
import doRequest from "../axiosHandler"

export default class DataHandler extends Component {
    constructor() {
        super()
        this.state = {
            popup: false,
            results: [],
            id: ""
        }
        this.refreshBounties = this.refreshBounties.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
        this.editID= this.editID.bind(this)
        
    }

    editID(id){
        this.setState({
            id: id || ""
        })
    }
    refreshBounties(){
        axios.get('/api/bounties').then(response => {
            this.setState({
                results: response.data
            })
        })
    }

    togglePopup(){
            this.setState(ps => (
                {
                popup: !ps.popup
                }
            ))
        }

    

    render() {
        return (
            <div className="formWrapper">
                {this.state.popup ? <Form doRequest={doRequest} edit={this.editID} refresh={this.refreshBounties} toggleClick={this.togglePopup}{...this.state} /> : null}
                <View {...this.state} handleClick={this.togglePopup} edit={this.editID} refresh={this.refreshBounties}/>
            </div>
        )
    }
}
