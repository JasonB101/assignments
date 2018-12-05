function upOrlow(string){
    return string.charAt(string.length - 1) === "!" ? string.toUpperCase() : string.toLowerCase()
}

console.log(upOrlow("this should be uppercase!"))
console.log(upOrlow("BUT THIS SHOULD BE LOWERCASE"))