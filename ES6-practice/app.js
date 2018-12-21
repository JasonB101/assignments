// function collectAnimals(...animals) {  
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 

// function combineFruit(fruit, sweets, vegetables){
//     return {
//         fruit,
//         sweets,
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration}){
//     console.log(`We're going to have a good time in ${location} for ${duration}`)
//   }

//   parseSentence(vacation)


//   function returnFirst(items){
//     const [firstItem] = items;
//     return firstItem
// }

// console.log(returnFirst([1, 3, 4, 5,]))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// function combineAnimals(...animals) {  
//  return animals
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

// function product(...numbers) {  
  
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }

//   console.log(product(1, 2, 3, 4, 5))

// function unshift(array, ...numbers) {  
//     return [...numbers, ...array];
//   }
 
//   console.log(unshift([1, 2, 3, 4, 5], 6, 5, 4, 3, 2))

const populatePeople = names => {
    return names.map(name => {
        let [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
});
}


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]