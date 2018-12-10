var rs = require('readline-sync')
console.log(add(+rs.question("Enter a Number:"), +rs.question("Enter a Number:")))
function add(a, b){
    return a + b;
}