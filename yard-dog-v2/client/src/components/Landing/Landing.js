import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Styles from "./Landing.module.css"

export default class Landing extends Component {
    constructor(props){
        super(props)
        this.state= {
            year: "",
            make: "",
            model: "",
            vin: ""
        }
    }
    updateText({name, value}){
        
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className={`${Styles.landingPage} ${Styles.centered}`}>
            
            <input type="text" className={Styles.inputBox} placeholder="Year" name="year" onChange={(e) => this.updateText(e.target)} value={this.state.year} ></input>
            <input type="text" className={Styles.inputBox} placeholder="Make" name="make" onChange={(e) => this.updateText(e.target)} value={this.state.make} ></input>
            <input type="text" className={Styles.inputBox} placeholder="Model" name="model" onChange={(e) => this.updateText(e.target)} value={this.state.model} ></input>
            <p>----------- or -----------</p>
            <input type="text" className={Styles.inputBox} placeholder="VIN Number" name="vin" onChange={(e) => this.updateText(e.target)} value={this.state.vinNumber} ></input>
            <Link to="research/results"><div onClick={(e) => this.props.handleClick(this.state)} className={`${Styles.submitButton} ${Styles.centered}`} id="submitButton">Submit</div></Link>
        </div>
        
        )
    }
}
