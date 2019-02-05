import React from 'react'
import Styles from "./SideNav.module.css"
import { withContext } from "../DataHandler"
import { Link, Switch, Route } from "react-router-dom"

function SideNav(props) {
    console.log(props)
    const styles = {
        Outter: {width: props.sidenav ? "100%" : "0"},
        Inner: {width: props.sidenav ? "70%" : "0"}
    }
    return (
        <div style={styles.Outter} id="sideNavOutter" onClick={(e => props.toggle(e.target.id))} className={Styles.sideNavOutter}>
            <div style={styles.Inner} id="sideNavInner" className={Styles.sideNavInner}>
            <Switch>
            <Route path="/research" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/research">Research</Link>
                    <Link to="/myaccount">My Account</Link>
                    {props.token ? <Link onClick={props.logout} to="/auth/login" >Logout</Link> : <Link to="/auth/login" >Login</Link>}
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
                    {props.token ? <Link onClick={props.logout} to="/auth/login" >Logout</Link> : <Link to="/auth/login" >Login</Link>}
                    </div>
                )} />

            </Switch>
                
            </div>
        </div>
    )
}

export default withContext(SideNav)
