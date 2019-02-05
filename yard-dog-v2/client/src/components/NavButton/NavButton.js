import React from 'react'
import Styles from "./NavButton.module.css"
import { withContext } from "../DataHandler"

const NavButton = (props) => (
    <div id="navButton" onClick={(e) => props.toggle(e.target.id)}>
        <img className={Styles.navButton} alt="" src="https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_menu_hamburger.png"></img>
    </div>
)

export default withContext(NavButton)

