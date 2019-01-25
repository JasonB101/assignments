import React from 'react'
import Styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className={Styles.navBar}>
            <Link to="/">VIN Research</Link>
            <Link to="/history">History</Link>
        </div>
    )
}

export default Navbar
