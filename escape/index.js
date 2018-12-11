var rs = require('readline-sync')
var keyFound = false
var won = false
var options = ["Put hand in hole.", "Find the key.", "Open the door"]
console.clear()
while (!won) {
    getInput = rs.keyInSelect(options, "What action would you like to perform?")
    console.clear()
    if (getInput === 1) {
        keyFound = true;
        console.log("You found the key!");
    }
    getInput === 2 && keyFound ? won = true : null
    getInput === 2 && !keyFound ? console.log("Sorry, you haven't found the key.") : null
    if (getInput === 0) break
}

won ? console.log("Congratulations you won!") : console.log("You just lost.......")