// The DOM (Document Object Model)
// is the representation of your web page
// (including the HTML and CSS) in JavaScript

// This will get  us a JS reference to the
//HTML element with the specified ID
// (remember, JS is case-sensitive)
let body = document.getElementById("myBodyElement");

body.style.backgroundColor = "lightgreen";

body.innerHTML = "<h1>Hello World!</h1>";

// we can also append HTML to 'innerHtmll'
body.innerHTML = 
    body.innerHTML +
    "<p id='myParagraph'>This was written with dynamic JS!</p>";

// the += operator is equivalent to the code above
body.innerHTML += "<p>here's another paragraph</p>";

//we can also  get JS references to HTML elements
// that we added dynamically
let myParagraph = documents.getElementById("myParagraph")
myParagraph.style.color = "blue";
myParagraph.style.fontWeight = "bold";
myParagraph.style.fontSize = "60px";

// we can combine everything we learn to
//build a light dark mode on the page
let isDarkMode = false;
if (isDarkMode) {
    body.style.backgroundColor = "#333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333";
}