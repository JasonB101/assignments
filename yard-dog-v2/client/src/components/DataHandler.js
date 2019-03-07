import React, { Component, createContext } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
const authAxios = axios.create()
const savedAxios = axios.create()
const { Consumer, Provider } = createContext()

savedAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class DataHandler extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            sidenav: false,
            savedCars: [],
            savedParts: []
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

    getSavedCars = () => {
        savedAxios.get("/api/saved/cars")
        .then(response => this.setState(ps => {
          return {
            savedCars: response.data
            }
        }))
    }

    getSavedParts = () => {
        savedAxios.get("/api/saved/parts")
        .then(response => this.setState(ps => {
            return {
              savedParts: response.data
              }
          }))
    }

    delSavedCars = (carID) => {
        savedAxios.del(`/api/saved/cars/${carID}`)
        .then(response => this.getSavedCars)
    }
    delSavedParts = (partID) => {
        savedAxios.del(`/api/saved/parts/${partID}`)
        .then(response => this.getSavedParts)
    }


    render() {
        return (
            <Provider value={{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout: this.logout,
                toggle: this.sideNavToggle,
                getSavedParts: this.getSavedParts,
                getSavedCars: this.getSavedCars,
                delSavedParts: this.delSavedParts,
                delSavedCars: this.delSavedCars
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
