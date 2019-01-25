import React from 'react'

function Loading({ loading, children }) {
    return (
        loading ? 
        <div>...Loading</div> :
        children
    )
}

export default Loading
