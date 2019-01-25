import React, { Component } from 'react'
import axios from 'axios'

export default class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            loading: true,
            errMsg: null

        }
    }
    getData() {
        axios.get("https://swapi.co/api/planets/")
            .then(response => this.setState({
                planets: response.data.results,
                loading: false,
                errMsg: null
            }))
            .catch(err => this.setState({
                loading: false,
                errMsg: "Data unavailable"
            }))
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}
