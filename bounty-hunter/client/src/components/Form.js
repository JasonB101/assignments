import React, { Component } from 'react'

export default class Form extends Component {
    constructor({props, id, results, edit}) {
        super(props)
        const editValues = results.find(x => x._id === id)
        this.state = {
            form: {
                fname: id ? editValues.fname : "",
                lname: id ? editValues.lname : "",
                killed: id ? editValues.killed : false,
                price: id ? editValues.price : 0,
                type: id ? editValues.type : "Jedi",
                id: id || ""
            }
        }
        this.changeValues = this.changeValues.bind(this)
    }
    changeValues(target, value) {
        this.setState(ps => ({
            form: {
                ...ps.form,
                [target]: value
            }
        }
        ))
    }

    render() {
        const self = this.state
        const change = (e) => this.changeValues(e.target.name, e.target.value)
        return (
            <div className="popup">
                <div className="theForm">
                    <p>First Name:</p>
                    <input onChange={change} className="textBox" type="text" name="fname" value={self.form.fname}></input>
                    <p>Last Name:</p>
                    <input onChange={change}  className="textBox" type="text" name="lname" value={self.form.lname}></input>
                    <p>Bounty Amount:</p>
                    <input onChange={change}  className="numberBox" type="number" name="price" value={self.form.price}></input>
                    <br></br>
                    <label>Bounty Terminated:<input onChange={change}  className="checkBox" type="checkbox" name="killed" checked={self.form.killed || false}></input></label>
                    <br></br>
                    <label>Allegiance <select onChange={change}  name="type" value={self.form.type}>
                        <option>Jedi</option>
                        <option>Sith</option>
                    </select></label>
                    <div className="sumbitWrapper">
                        <button onClick={() => {
                            this.props.doRequest(this.state)
                            this.props.toggleClick()
                            this.props.refresh()
                            this.props.edit()

                        }}>Submit</button>
                        <button onClick={() => {
                            this.setState({
                                form: {
                                    fname: "",
                                    lname: "",
                                    killed: true,
                                    price: 0,
                                    type: "Jedi",
                                    id: ""
                                }
                            })
                            this.props.toggleClick()
                            this.props.edit()
                        }}>Cancel</button>

                    </div>
                </div>
            </div>
        )
    }
}
