import React, { Component } from 'react'
import View from "./View"
import axios from "axios"
import Form from "./Form"

export default class DataHandler extends Component {
    constructor() {
        super()
        this.state = {
            popup: true,
            results: []
        }
        this.refreshBounties = this.refreshBounties.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
    }

    refreshBounties(){
        axios.get('/bounties').then(response => {
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
                {this.state.popup ? <Form {...this.state} /> : null}
                <View {...this.state} refresh={this.refreshBounties}/>
            </div>
        )
    }
}
