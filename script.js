// Get input and paste into the page
document.querySelector("#text-input").addEventListener('input', function (event) {
  document.querySelector("#meme-text").innerHTML = document.querySelector("#text-input").value;
})

var loadFile = function (event) {
  var image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

// Own style buttons
const getButton1 = document.getElementById("button1")
const getButton2 = document.getElementById("button2");
const getButton3 = document.getElementById("button3");
const getDiv = document.querySelector("div");

// Event listeners
getButton1.addEventListener('click', button1)
getButton2.addEventListener('click', button2)
getButton3.addEventListener('click', button3)

// Button1 function
function button1() {
  getDiv.style.border = "3px dashed red";
}

// Button2 function
function button2() {
  getDiv.style.border = "5px double blue"
}

// Button3 function
function button3() {
  getDiv.style.border = "6px groove green"
}