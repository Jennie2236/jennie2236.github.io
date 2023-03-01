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
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML= greeting + ", " + username;
}

greetUserOnPage("Jen");

//funcction that outputs (or "returns")
function getUserGreeting(username) {
    return greeting + ", " + username + "! How can I help you?";
}

console.log(getUserGreeting("Jen"));

//  function using another function
//that modifiesthe page
function greetUserOnPageV2(username){
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("Jennifer Figueroa")