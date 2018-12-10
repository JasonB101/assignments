var rs = require('readline-sync');
var arr = []
var name = rs.question("What is your name? ")
var age = rs.question("What is your age? ")
var fColor = rs.question("What is your favorite color? ")
var fruit = rs.question("Type in a fruit: ")
var message = rs.question("Type in a long message, more than 20 characters: ")


arr.push(name.toUpperCase(), age, fColor.concat(fruit), message.slice(message.length / 2), message.slice(rs.questionInt("Enter a number of the index, from where you would like to read the message: ")))

console.log(arr)