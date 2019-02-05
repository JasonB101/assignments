import React, { Component } from 'react'
import { withContext } from "../DataHandler"
import Styles from "./Auth.module.css"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: ""
        }
    }

    handleChange = (input) => {
        this.setState({
            [input.name]: input.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => {
                this.props.history.push("/myaccount")
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response.data.message
                })
            })
    }

    render() {
        return (
            <div>
            <form className={Styles.signupWrapper}>
                <h2 className={Styles.h2}>Create an account</h2>
                <input onChange={(e) => this.handleChange(e.target)} value={this.state.fname} type="text" name="fname" placeholder="First Name" />
                <input onChange={(e) => this.handleChange(e.target)} value={this.state.lname} type="text" name="lname" placeholder="Last Name" />
                <input onChange={(e) => this.handleChange(e.target)} value={this.state.email} type="text" name="email" placeholder="e-mail address" />
                <input onChange={(e) => this.handleChange(e.target)} value={this.state.password} type="password" name="password" placeholder="password" />
                <input onChange={(e) => this.handleChange(e.target)} value={this.state.confirmPassword} type="password" name="confirmPassword" placeholder="confirm password" />
                <button onClick={(e) => this.handleSubmit(e)} className={Styles.submitButton}>Submit</button>
            </form>
            {this.state.errorMessage ? <p className={Styles.errorMessage}>{this.state.errorMessage}</p> : null}
            </div>
            
        )
    }
}

export default withContext(Signup)