import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import View from "./View"
import SideNav from "./SideNav/SideNav"

function App() {
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



