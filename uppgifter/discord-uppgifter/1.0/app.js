//Variables
const rubrik = document.getElementById("rubrik");
const button = document.getElementById("button");

//Eventlisteners
button.addEventListener("click", buttonPressed);

//Funktions
function buttonPressed() {
    if (rubrik.innerHTML === "") {
        rubrik.innerHTML = "Det är roligt att vara tillbaka i skolan!";
    } else {
        rubrik.innerHTML = ""
    }
    
}