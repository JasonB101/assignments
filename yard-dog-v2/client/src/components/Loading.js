import React from 'react'

function Loading({loading, children}) {
    
    return loading ?
        <div className="loading">
            <h3>Loading...</h3>
        </div> : 
        children

}

export default Loading
