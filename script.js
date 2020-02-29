let textInput = document.getElementById("text-input");
let memeInsert = document.getElementById("meme-insert");

let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");
let divImage = document.getElementById("meme-image-container");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");



function addMeme() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.style.height = 400 + "px";
    memeImage.style.width = 400 + "px";
}

function addText() {
    memeText.innerHTML = textInput.value;
}

function addBorder(indicador) {
    if (indicador == 1) {
        divImage.style.borderColor = "red";
        divImage.style.borderWidth = 3 + "px";
        divImage.style.borderStyle = "dashed";
    } else if (indicador == 2) {
        divImage.style.borderColor = "blue";
        divImage.style.borderWidth = 5 + "px";
        divImage.style.borderStyle = "double";
    } else if (indicador == 3) {
        divImage.style.borderColor = "green";
        divImage.style.borderWidth = 6 + "px";
        divImage.style.borderStyle = "groove";
    }
}



memeInsert.addEventListener("change", addMeme);

textInput.addEventListener("keyup", addText);

button1.addEventListener("click", function () {
    addBorder(1);
});

button2.addEventListener("click", function () {
    addBorder(2);
});

button3.addEventListener("click", function () {
    addBorder(3);
});


