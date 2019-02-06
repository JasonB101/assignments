import React, { Component } from 'react'
import Styles from "./Landing.module.css"
import { withRouter } from "react-router-dom"

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: "",
            make: "",
            model: "",
            vin: "",
            errorMessage: ""
        }
    }
    updateText({ name, value }) {
        if (name === "vin") {
            this.setState({
                year: "",
                make: "",
                model: "",
                errorMessage: "",
                [name]: value
            })
        } else {
            this.setState({
                vin: "",
                errorMessage: "",
                [name]: value
            })
        }
    }
    render() {
        const self = this.state
        return (
            <div className={`${Styles.landingPage} ${Styles.centered}`}>
                <p className={Styles.errorMessage}>{self.errorMessage ? self.errorMessage : " "}</p>
                <input type="text" className={Styles.inputBox} placeholder="Year" name="year" onChange={(e) => this.updateText(e.target)} value={this.state.year} ></input>
                <input type="text" className={Styles.inputBox} placeholder="Make" name="make" onChange={(e) => this.updateText(e.target)} value={this.state.make} ></input>
                <input type="text" className={Styles.inputBox} placeholder="Model" name="model" onChange={(e) => this.updateText(e.target)} value={this.state.model} ></input>
                <p>----------- or -----------</p>
                <input type="text" className={Styles.inputBox} placeholder="VIN Number" name="vin" onChange={(e) => this.updateText(e.target)} value={this.state.vin} ></input>
                <div onClick={(e) => {
                    if (self.vin || (self.year && self.make && self.model)) {
                        this.props.handleClick(this.state)
                        this.props.history.push("research/results")
                    } else {
                        this.setState({
                            errorMessage: "You must fill in all required boxes"
                        })
                    }
                }
                } className={`${Styles.submitButton} ${Styles.centered}`} id="submitButton">Submit</div>
            </div>

        )
    }
}

export default withRouter(Landing)