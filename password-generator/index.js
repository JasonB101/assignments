function generatePassword(L, string){
var password;
if (string) {
    password = string.split("").sort(() => (Math.floor(Math.random()*2))).join("")
} else {
    password = String.fromCharCode(Math.floor(Math.random()*89+33))
}
while(password.length < L){
var index = Math.floor(Math.random() * (password.length - 1))
var character;
character = String.fromCharCode(Math.floor(Math.random()*89+33))
password = password.substr(0, index) + character + password.substr(index)
}
console.log(password)
}

generatePassword(15)