// Array is a  listof objects
// Arays are a type of  data structure
// constructs thathold data.

//arrays cacn becreated  with square brackets
let emptyArray = [];// more can be added later

let numberArray = [27, 7, 2, 2929, 45];// length of  5

let stringArray = ["apple", "orange", "grapes", "pear"];//  length of  4

let mixedArray = ["cat", 2, 5, "dog", 12, "patypus", [2, 3]];

let groceryList = [
    "fruits", 
    "veggies",
    "chicken",
    "milk",
];

console.log(groceryList);


let firstGroceryItem = groceryList[0];
console.log(firstGroceryItem);

let thirdGroceryItem = groceryList[2];
console.log(thirdGroceryItem);

let lastGroceryItem = groceryList[3];
console.log(lastGroceryItem);

//use push method to add to a array
console.log(groceryList);
grocerryList.push("ice cream");
console.log(groceryList);