import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                fname: "",
                lname: "",
                killed: true,
                price: 0,
                type: ""
            }
        }
    }
    
    render() {
        const self = this.state
        return (
            <div className="popup">
        <div className="theForm">
                    <p>First Name:</p>
                    <input className="textBox" type="text" name="fname" value={self.form.fname}></input>
                    <p>Last Name:</p>
                    <input className="textBox" type="text" name="lname" value={self.form.lname}></input>
                    <p>Bounty Amount:</p>
                    <input className="numberBox" type="number" name="price" value={self.form.price}></input>
                    <br></br>
                    <label>Bounty Terminated:<input className="checkBox" type="checkbox" name="price" checked={self.form.killed}></input></label>
                    <br></br>
                    <label>Allegiance <select value={self.form.type}>
                        <option>Jedi</option>
                        <option>Sith</option>
                    </select></label>
                    <div className="sumbitWrapper">
                        <button>Submit</button>
                    </div>
                </div>
                </div>
        )
    }
}
