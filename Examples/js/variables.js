//variablesneed to  be declared
//before they can be used.
// variable declaration is one
// by using the 'let' keywork.

debugger;

//a vaiable assigned a string data type
let greeting = "Good Evening";
console.log(greeting);

//variable assigned a number data type
let myNumber = 5;
console.log(myNumber);

// we can change the value assigned to a variable
myNumber = 10;
console.log(myNumber);

myNumber = "one thousand";
console.log(myNumber);

//we can also use opearators for variables assignments
let myNewNumber = 5 + 4
console.log(myNewNumber)

let anotherNumber = myNumber + myNewNumber;
console.log(anotherNumber);

// we can even use the same variable
//in its own assignments
anotherNumber = anotherNumber + 5;
console.log(anotherNumber);

//more pratical example of how
// variables can be used on site
let username = "Jennifer";
let personalizeGreeting = greeting + username
console.log(personalizeGreeting);
