import React from "react"
import Controls from "./Controls"
import Grid from "./Grid"

const newHead = (snake, max) => {
    const head = snake[0]
    const options = [[head[0] + 1, head[1]], [head[0] - 1, head[1]], [head[0], head[1] + 1], [head[0], head[1] - 1]]
    const possibleOptions = options.filter(x => (
        [checkSnake(x, snake) === false, x[0] >= 0, x[0] < max, x[1] >= 0, x[1] < max].every(x => x)
    ))
    let randoIndex = Math.floor(Math.random() * possibleOptions.length)
    return possibleOptions[randoIndex]

}

function checkSnake(option, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i][0] === option[0] && snake[i][1] === option[1]) {
            return true
        }
    }
    return false
}

class Platform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array(12).fill(Array(12).fill(0)),
            buttons: [],
            snake: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]],
            length: 6,
            color: "blue"
        }
        this.startSnake = this.startSnake.bind(this)
        this.addToSnake = this.addToSnake.bind(this)
    }
    startSnake() {
        if (this.T){
            clearInterval(this.T)
            this.T = null
        } else {
            this.T = setInterval(() => {
                this.setState(ps => ({
                    snake: [newHead(ps.snake, ps.boxes[0].length) ? newHead(ps.snake, ps.boxes[0].length) : [0, 0],
                    ...ps.snake.slice(0, ps.length - 1)]
                }))
            }, 100)
        }
        
    }

    addToSnake() {
        this.setState({
            length: this.state.length + 1
        })
    }

    componentDidMount() {
        this.setState(ps => ({
            buttons: [
                {
                    title: "Start Snake",
                    onClick: this.startSnake
                },
                {
                    title: "Add to Snake",
                    onClick: this.addToSnake
                }
            ]

        }))
    }




    render() {
        return (
            <div className="wrapper">
                <Controls button={this.state.buttons} />
                <Grid {...this.state} />
            </div>
        )
    }
}

export default Platform