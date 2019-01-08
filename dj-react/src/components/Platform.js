import React from "react"
import Controls from "./Controls"
import Grid from "./Grid"
const snakeColor = "red"

const newHead = (snake) => {
let head = snake[0]

}

class Platform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array(6).fill(Array(6).fill(0)),
            buttons: [],
            snake: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]
        }
        this.addToSnake = this.addToSnake.bind(this)
    }
    addToSnake(){
        const head = this.state.snake[0]
        this.setState(ps => ({
            snake: [newHead(ps.state.snake), ...ps.snake.slice(0, 4)]
        }))
    }
    componentDidMount() {
        this.setState(ps => ({
            
            buttons: [
                {
                    title: "Add To Snake",
                    onClick: this.addToSnake
                }
                
            ]

        }))
    }

    handleFirstRow() {
        this.setState((ps) => ({
            colors: ps.colors.map((x, j) => x.map((x, i) => j === 0 ? snakeColor : x))
        }))

    }
    handleSecondRow() {
        this.setState((ps) => ({
            colors: ps.colors.map((x, j) => x.map((x, i) => j === 1 ? snakeColor : x))
        }))

    }
    handleBottomHalf() {
        this.setState((ps) => ({
            colors: ps.colors.map((x, j) => x.map((x, i) => j > ps.colors.length / 2 - 1 ? snakeColor : x))

        }))

    }
    handleTopHalf() {
        this.setState((ps) => ({
            colors: ps.colors.map((x, j) => x.map((x, i) => j < ps.colors.length / 2 ? snakeColor : x))
        }))

    }
    handleReset() {
        this.setState((ps) => ({
            colors: ps.colors.map((x, j) => x.map((x, i) => "white"))
        }))

    }

    render() {
        return (
            <div className="wrapper">
                <Controls button={this.state.buttons} />
                <Grid boxes={this.state.boxes} snake={this.state.snake} />
            </div>
        )
    }
}

export default Platform