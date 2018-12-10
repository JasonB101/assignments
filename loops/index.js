arr = [35, 65, 67, 43, 34, 76, 7]

function one(string) {
    var newArray = [];
    for (i = 0; i < string.length; i++) {
        newArray.push(string.charAt(i));
    }
    console.log(newArray)

}

function two(string, character) {
    var result;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            return character + " is at location: " + i
        }
    }
    return "Character not found"
}

function three() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 42) {
            return "Found 42!"
        }
    }
    return "42 not found..."
}

function four(array){
    var smallest;
    for (i = 0; i < array.length; i++){
        smallest ? null : smallest = array[i];
        smallest > array[i] ? smallest = array[i] : null
    }
    console.log(smallest)
}


// one("JasonBrown");

// console.log(two("JasonBrown", "r"))

// console.log(three());

four(arr)