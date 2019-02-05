import React, { Component, createContext } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
const authAxios = axios.create()
const { Consumer, Provider } = createContext()

class DataHandler extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            sidenav: false,
            cars: [],
            parts: []

        }
    }

    sideNavToggle = (target) => {
        
        if (target !== "sideNavInner") {
            this.setState(ps => {
                return { sidenav: !ps.sidenav }
            })
        }
    }

    signup = (credentials) => {
        return authAxios.post("/auth/signup", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return authAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: ""
        })
        this.props.history.push("/login")
    }


    render() {
        return (
            <Provider value={{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout: this.logout,
                toggle: this.sideNavToggle
            }}>
                {this.props.children}
            </Provider>
        )
    }
}



export default withRouter(DataHandler)
export const withContext = C => props => {
    return (
        <Consumer>
            {value => <C {...value} {...props} />}
        </Consumer>
    )
}
