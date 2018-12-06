var string = "Aye matey!"
function checknRemove(string) {
    var newStr = string;
    for (var i = string.length - 1; i > -1; i--) {
        if (string.charAt(i) === "a" || string.charAt(i) === "A") {
            newStr = newStr.substr(0, i) + newStr.substr(i + 1)
        }
    }
    return newStr
}

console.log(checknRemove(string));