var alpha = "abcdefghijklmnopqrstuvwxyz".split("")

function cipher(string, shift){
    shift = shift % 26
    var result = string.toLowerCase().split("");
    for (let i = 0; i < result.length; i++) {
        var index = alpha.indexOf(result[i]) + shift
        if (alpha.indexOf(result[i]) != -1) {
            (index) > 25 ? result[i] = alpha[index - 26] : result[i] = alpha[index];
        }
    }
    console.log(result.join(""));
}
cipher("abcdefghijklmnopqrstuvwxyz", 3);
