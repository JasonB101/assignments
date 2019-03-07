import React, { Component } from 'react'
import { withContext } from "../DataHandler"
import Styles from "./Auth.module.css"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (input) => {
        this.setState({
            errorMessage: "",
            [input.name]: input.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => {
                this.props.getSavedCars()
                this.props.getSavedParts()
                this.props.history.push("/myaccount")
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response.data.message
                })
                setTimeout(() => {
                    this.setState({
                        errorMessage: ""
                    })
                }, 5000)
            })
    }

    render() {
        return (
            <div className={Styles.formWrapper}>
                <form className={Styles.signupWrapper}>
                    <h2 className={Styles.h2}>Login</h2>
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.email} type="text" name="email" placeholder="e-mail address" />
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.password} type="password" name="password" placeholder="password" />
                    {this.state.errorMessage ? <p className={Styles.errorMessage}>{this.state.errorMessage}</p> : null}
                    <button onClick={(e) => this.handleSubmit(e)} className={Styles.submitButton}>Submit</button>
                </form>
            </div>

        )
    }
}

export default withContext(Signup)