var rs = require('readline-sync')
var options = ["+","*","-","/"]

while(true){
var num1 = rs.question("Enter number 1: ")
console.clear()
console.log(num1)
var operation = rs.keyInSelect(options, "Choose an operation: ")
console.clear()
console.log(num1 + " " + options[operation])
operation !== -1 ? num2 = rs.question("Enter number 2: ") : null
console.clear()
if (operation === 0) {console.log("Answer is: " + add(num1, num2))}
else if (operation === 1) {console.log(num1 + " " + options[operation] + " " + num2 + " = " + multiply(num1, num2))}
else if (operation === 2) {console.log(num1 + " " + options[operation] + " " + num2 + " = " + subtract(num1, num2))}
else if (operation === 3) {console.log(num1 + " " + options[operation] + " " + num2 + " = " + divide(num1, num2))}
else if (operation === -1) {break}
}


function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

