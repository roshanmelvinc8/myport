
function colortouch(){
    document.getElementById('h5').style.color="red";

}

let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];
let index = 0;
function clickme() {
	document.getElementById('h5').style.color =  colors[index];
	index = (index + 1) % colors.length;
	
}
const button = document.getElementById("bn");

button.addEventListener("click", function () {
    const colors = ["red", "blue", "orange", "yellow", "green", "violet"];

    const random = colors[Math.floor(Math.random() * colors.length)];

    // ✅ change button color
    button.style.backgroundColor = random;

    // ✅ change body background
    document.body.style.backgroundColor = random;
}); 


const contactButton = document.getElementById("RevealButton");
const displayDiv = document.getElementById("displayDiv");
contactButton.addEventListener("click", () => {
    displayDiv.textContent = "Name: Roshan Melvin C";
})
function showTime() {
	document.getElementById('currenttime').innerHTML = new Date().toUTCString();

showTime();
setInterval(function () {
	showTime();
}, 1000);
}

function connectMe() {
    alert("Thank you for visiting my portfolio! 🎉");
}