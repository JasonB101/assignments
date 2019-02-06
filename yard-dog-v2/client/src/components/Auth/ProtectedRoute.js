import React from "react"
import { Route, Redirect } from "react-router-dom";
import { withContext } from "../DataHandler"

function ProtectedRoute(props) {
    const { component: Component, ...rest } = props;
    return (
        props.token ?
            <Route {...rest} component={Component} /> :
            <Redirect to="/auth/login" />
    )
}

export default withContext(ProtectedRoute);