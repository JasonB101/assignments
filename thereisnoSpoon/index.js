var nutritionBar = {
    brand: "nature valley",
    quantity: 1,
    mainIngredient: "Oats",
    isGone: function(c){
        return Math.floor(Math.random()*2) ? true : false
    }
}

var watch = {
    brand: "Apple",
    size: 38,
    color: "black",
    owner: function(){
        return prompt("Enter the name of the Owner", "Jason")
    }
}

var monitor = {
    brand: "ASUS",
    screensize: 24,
    color: "black",
    yearMade: function(){
        console.log("Who knows, but I know its color is " + this.color);
        return "Unknown";
    }
}

var computer = {
    brand: "Apple",
    color: "Gray",
    cost: 1000000,
    isOn: true,
    listAll: function(){
        return Object.entries(computer)
    }
}

//Movin On!!!!!!!! 
var phone;

var shoes;

var mug;

var student;

var ball;

var car;
