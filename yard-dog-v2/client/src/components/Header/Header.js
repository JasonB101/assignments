import React from 'react'
import Navbar from "../NavBar/Navbar"
import NavButton from "../NavButton/NavButton.js"

function Header() {
    
    return (
        <header className="header">
            <NavButton />
            <div className="spacer" />
            <Navbar />
        </header>
    )
}

export default Header
