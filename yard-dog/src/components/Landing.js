import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Landing extends Component {
    constructor(props){
        super(props)
        this.state= {
            searchText: ""
        }
    }
    updateText(text){
        this.setState({
            searchText: text
        })
    }
    render() {
        return (
            <div className="landing-page centered">
            <input type="text" className="vin-box" placeholder="VIN Number" name="vinBox" onChange={(e) => this.updateText(e.target.value)} value={this.state.searchText} ></input>
            <Link to="research"><div onClick={(e) => this.props.handleClick(this.state.searchText)} className="submit-button centered" id="submitButton">Submit</div></Link>
        </div>
        
        )
    }
}
