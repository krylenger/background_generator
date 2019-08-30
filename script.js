var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var result = document.querySelector("h3");
var random = document.querySelector(".random");
var body = document.getElementById("body");


body.style.background = "linear-gradient(to right, " + 
							color1.value + ", " + 
							color2.value + ")";
result.textContent = body.style.background;


function rdInt() {
	return Math.floor(Math.random() * 256);
}

function setRandomGradient() {
	body.style.background = "linear-gradient(to right, rgb(" 
							+ rdInt() + ", " + rdInt() 
							+ ", " + rdInt() + "), rgb(" 
							+ rdInt() + ", " + rdInt() 
							+ ", " + rdInt() + "))";
	result.textContent = body.style.background;
}

function setColor() {
	body.style.background = "linear-gradient(to right, " + 
							color1.value + ", " + 
							color2.value + ")";
	result.textContent = body.style.background;
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
random.addEventListener("click", setRandomGradient);