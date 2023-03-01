// variable review
let greeting = "Good Evening";
console.log(greeting);

// Simple Function
function greet() {
    console.log(greeting);
}

greet();

// function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Jen");

// function with inout paramete
// that modify  the page
function  greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greeting display");
    greetingDisplay.innferHTML= greeting + ", " + username;
}