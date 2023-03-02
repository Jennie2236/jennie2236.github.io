let result = document.getElementById("result");

function displayTwoPlusTwo() {
    let number1 = 2;
    let number2 = 2;
    result.innerHTML = number1 + number2;
}

displayTwoPlusTwo();

function displayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displaytwelveTimesTwelve() {
    result.innerHTML = 12 * 12;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

displayMultiply();

