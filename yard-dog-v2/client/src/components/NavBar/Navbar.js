import React from 'react'
import Styles from "./Navbar.module.css"
import { Link, Switch, Route } from "react-router-dom"

function Navbar(props) {
    return (
        
            <Switch>
            <Route path="/research" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/research">Research</Link>
                    <Link to="/research/history">History</Link>
                    </div>
                )} />
                <Route path="/auth" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/auth/login">Login</Link>
                    <Link to="/auth/signup">Sign Up</Link>
                    </div>
                )} />
                <Route exact path="/myaccount" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/research">Research</Link>
                    <Link to="/myaccount/saves">My Cars & Parts</Link>
                    </div>
                )} />
                <Route path="/myaccount/saves" render={() => ( 
                    <div className={Styles.navBar}>
                    <Link to="/myaccount/saves/cars">My Cars</Link>
                    <Link to="/myaccount/saves/parts">My Parts</Link>
                    </div>
                )} />

            </Switch>
    )
}

export default Navbar

