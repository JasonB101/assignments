import React from 'react'
import { Route } from 'react-router-dom'
import Data from "./Data"
import Loading from "./Loading"
import ErrorHandler from "./ErrorHandler"
import List from "./List"
import Detail from "./Detail"

function MainView() {
    return (
        <div>
            <Data>
                {({ loading, errMsg, planets }) => (
                    <Loading loading={loading}>
                        <ErrorHandler errMsg={errMsg}>
                            <Route exact path='/' component={() => (
                                <List planets={planets} />
                            )} />
                            <Route path='/planets/:id' component={(routeProps) => (
                                <Detail {...routeProps.location.state.planet}/>
                            )}/>
                            <div>data</div>
                        </ErrorHandler>
                    </Loading>
                )}
            </Data>
        </div>
    )
}

export default MainView
