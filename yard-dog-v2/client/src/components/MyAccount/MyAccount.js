import React from 'react'
import {withContext} from "../DataHandler"
import Styles from "./MyAccount.module.css"

class MyAccount extends React.Component {
    
    render(){
    return (
        <div>
            <p className={Styles.greeting}>{`Welcome to your account ${this.props.user.fname}!`}</p>
        </div>
    )
}
}

export default withContext(MyAccount)
