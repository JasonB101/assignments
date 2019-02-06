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
            errorMessage: "",
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
        const self = this.state
        return (
            <div className={Styles.formWrapper}>
                <form className={Styles.signupWrapper}>
                    <h2 className={Styles.h2}>Create an account</h2>
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.fname} type="text" name="fname" placeholder="First Name" />
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.lname} type="text" name="lname" placeholder="Last Name" />
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.email} type="text" name="email" placeholder="e-mail address" />
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.password} type="password" name="password" placeholder="password" />
                    <input onChange={(e) => this.handleChange(e.target)} value={this.state.confirmPassword} type="password" name="confirmPassword" placeholder="confirm password" />
                    {this.state.errorMessage ? <p className={Styles.errorMessage}>{this.state.errorMessage}</p> : null }
                    <button onClick={(e) => {
                        e.preventDefault()
                        if (self.fname && self.lname && self.email.includes("@") && self.password && self.confirmPassword) {
                        return this.handleSubmit(e)
                    } else {
                        this.setState({
                            errorMessage: "You must fill in all required boxes"
                        })
                        setTimeout(() => {
                            this.setState({
                                errorMessage: ""
                            })
                        }, 5000)
                    }

                    }
                    } className={Styles.submitButton}>Submit</button>
                </form>
            </div >

        )
    }
}


export default withContext(Signup)