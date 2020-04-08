
var log_number = [];
var button = document.getElementById("btn");

button.onclick = function() {

var randomNumber = Math.floor(Math.random()*1000 + 1);
log_number.push(randomNumber);

document.querySelector("#number").textContent = randomNumber;
document.querySelector("#log").textContent = "Siste nummere: " + log_number;
};
