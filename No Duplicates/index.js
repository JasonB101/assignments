var input = "bookkeeper larry";

var rndNum = Math.floor(Math.random() * input.length - 1);
console.log(input.substr(0, rndNum) + input.substr(rndNum + 1));
console.log(input.split("").sort(() => Math.floor(Math.random() * 2)).join(""));

var vowels = ["e", "a", "i", "o", "u", "y"]

for (i = input.length - 1; i > -1; i--)
    if (checknRemove(i)) {
        input = input.substr(0, i) + input.substr(i + 1)
    }

function checknRemove(c) {
    for (var i = 0; i < vowels.length; i++) {
        if (input.charAt(c) === vowels[i]) {
            return true;
        }
    }
}

console.log(input)