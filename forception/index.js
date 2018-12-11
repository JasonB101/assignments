var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
var arr = [];
for (let i = 0; i < people.length; i++) {
    arr.push(people[i] + ":")
    for (let e = 0; e < alphabet.length; e++) {
        arr.push(alphabet[e])
    }
}
console.log(arr)