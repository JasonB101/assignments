import React from 'react'
import {withContext} from "../DataHandler"
import Styles from "./MyAccount.module.css"

function MyAccount(props) {
    console.log(props)
    return (
        <div>
            <p className={Styles.greeting}>{`Welcome to your account ${props.user.fname}!`}</p>
        </div>
    )
}

export default withContext(MyAccount)
