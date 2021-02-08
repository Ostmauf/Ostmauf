
//Button Variables
let plusButton = document.getElementById("plus-button");
let minusButton = document.getElementById("minus-button");

//Eventlistener
plusButton.addEventListener("click", plusCounter);
minusButton.addEventListener("click", minusCounter);

//Other Variables
let mainText = document.getElementById("main-text");
let counterNumber = 0;

//Funktions
function plusCounter() {

    counterNumber++;
    mainText.innerHTML = counterNumber;

}

function minusCounter() {

    counterNumber--;
    mainText.innerHTML = counterNumber;

}