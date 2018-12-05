createEvenArray = function (highestNum){
var tArr = [];
for (var i = 2; i < highestNum; i = i + 2){
    tArr.push(i);
}
return tArr
}

addOdds = function(evensOnlyArray){
var newArr = [];
 for (var i = 0; i < evensOnlyArray.length; i++){
     if (evensOnlyArray[i] === 2){
         newArr.push(1);
     }
     newArr.push(evensOnlyArray[i]+1)
 }
 newArr = newArr.concat(evensOnlyArray);
 return newArr;
}

function sortArray(theArray){
    return theArray.sort((a, b) => a - b)
}

console.log(sortArray(addOdds(createEvenArray(10))));
