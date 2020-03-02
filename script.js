
let addImage = document.getElementById("meme-insert");
let addText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");


function criandoUrl() {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(addImage.files[0]);
  image.style.height = 400 + "px";
  image.style.width = 400 + "px";
};
addImage.addEventListener("change", criandoUrl);

function inputText() {
  memeText.textContent = addText.value;
};
addText.addEventListener("beforeinput", inputText);


function button1() {
  border.style.borderColor = "red";
  border.style.borderStyle = "dashed";
  border.style.borderWidth = "3px";
};

function button2() {
  border.style.borderColor = "blue";
  border.style.borderStyle = "double";
  border.style.borderWidth = "5px";
};

function button3() {
  border.style.borderColor = "green";
  border.style.borderStyle = "groove";
  border.style.borderWidth = "6px";
};
