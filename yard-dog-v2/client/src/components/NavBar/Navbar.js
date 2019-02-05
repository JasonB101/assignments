import React from 'react'
import Styles from "./Navbar.module.css"
import { Link, Switch, Route } from "react-router-dom"

function Navbar(props) {
    return (
        
            <Switch>
            <Route path="/research" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/research">Research</Link>
                    <Link to="/myaccount">My Account</Link>
                    </div>
                )} />
                <Route path="/auth" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/auth/signup">Sign Up</Link>
                    </div>
                )} />
                <Route path="/myaccount" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/research">Research</Link>
                    <Link to="/myaccount/cars">My Cars & Parts</Link>
                    </div>
                )} />

            </Switch>
    )
}

export default Navbar
