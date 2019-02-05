import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import DataHandler from "./components/DataHandler"
import { BrowserRouter } from "react-router-dom"
import "./components/styles/global.css"

render(
    <BrowserRouter>
        <DataHandler>
            <App />
        </DataHandler>
    </BrowserRouter>,
    document.getElementById('root'))