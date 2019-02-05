import React from 'react'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import SideNav from './SideNav/SideNav'
import View from "./View"
// import { withContext } from "../components/DataHandler"

function App(props) {
    return (
            <div className="app-wrapper">
                <SideNav />
                <Header />
                <View />
                <Footer />
            </div>
    )
}

export default App
