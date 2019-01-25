import React from "react"
import Square from "./Square"

const Grid = ({ boxes, snake, color }) => {
    
    function checkSnake(j, x){
        for (let i = 0; i < snake.length; i++) {
            if (snake[i][0] === j && snake[i][1] === x){
                return true
            }
        }
        return false
    }
    const squareComponents = boxes.reduce((acc, row, j) => [...acc, ...row.map((x, i) => <Square key={j + 6 + "" + i} color={checkSnake(j, i) ? color : "white"} />)], [])

    return (
        <div className="grid">
            {squareComponents}
        </div>
    )
}

export default Grid