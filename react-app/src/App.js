import React from "react"
import Box from "./box"

const App = () => {
    const objS = [{
        style: {
            backgroundColor: "green",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid white"
        },
        title: "Hell Yeah",
        subtitle: "Fuck",
        info: "sum bull shit"
    },
     
    {
        style: {
            backgroundColor: "green",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid white"
        },
        title: "Hell Yeah",
        subtitle: "Fuck",
        info: "sum bull shit"
    }]

    const content = objS.map((x, i) => <Box key={i}{...x}/>)
    return(
        <div>
            {content}
            
        </div>
    )
}

export default App