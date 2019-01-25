import React from 'react'
import Styles from "./SideNav.module.css"
import { withSideToggle } from "../SideNavProvider"
import { Link } from "react-router-dom"

function SideNav(props) {
    const styles = {
        Outter: {width: props.state.sidenav ? "100%" : "0"},
        Inner: {width: props.state.sidenav ? "70%" : "0"}
    }
    return (
        <div style={styles.Outter} id="sideNavOutter" onClick={(e => props.toggle(e.target.id))} className={Styles.sideNavOutter}>
            <div style={styles.Inner} id="sideNavInner" className={Styles.sideNavInner}>
                <Link to="/">VIN Research</Link>
                <Link to="/history">Vehicle History</Link>
            </div>
        </div>
    )
}

export default withSideToggle(SideNav)
