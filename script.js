var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var result = document.querySelector("h3");
var body = document.getElementById("body");
var random = document.querySelector(".random");

body.style.background = "linear-gradient(to right, #FF0046, #0000AA)";
result.textContent = body.style.background + ";";

function setColor() {
	body.style.background = "linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value 
							+ ")";
	result.textContent = body.style.background + ";";


}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function rdCl() {
	return randomInteger(0, 256);
}

function randomGradient() {
	var x = rdCl();
	var y = rdCl();
	var z = rdCl();
	var x1 = rdCl();
	var y1 = rdCl();
	var z1 = rdCl();
	body.style.background = "linear-gradient(to right, rgb(" 
							+ x + ", " + y + ", " + z + "), rgb("
							 + x1 + ", " + y1 + ", " + z1 + "))";  
	result.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
random.addEventListener("click", randomGradient);




























// console.log(body);
// console.log(color2);
// console.log(result);