import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./components/App"
import "./styles/global.css";
import SideNavProvider from './components/SideNavProvider';

render(
    <BrowserRouter>
        <SideNavProvider>
            <App />
        </SideNavProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
)