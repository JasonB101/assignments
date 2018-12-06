var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"
];

function one() {
    console.log(lyrics.join(" "))
}

function two() {
    console.log(lyrics.reverse().join(" "))
}

function three() {
    var newArray = [];
    for (i = 0; i < lyrics.length; i++) {
        i % 2 ? null : newArray.push(lyrics[i])
}
console.log(newArray.join(" "))
}
// one();
// two();
three();