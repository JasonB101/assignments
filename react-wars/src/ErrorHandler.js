import React from 'react'

function ErrorHandler({errMsg, children}) {
    return (
        errMsg ?
        <p>{errMsg}</p> :
        children
    )
}

export default ErrorHandler
