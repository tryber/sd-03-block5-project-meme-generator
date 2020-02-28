let textInput = document.getElementById("text-input");
let imageInput = document.getElementById("input-image");
let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function addMeme() {
    memeImage.src = URL.createObjectURL(imageInput.files[0]);
}

imageInput.addEventListener("change", addMeme);

function addText() {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener("keyup", addText);

function addBorder(indicador) {
    if(indicador == 1) {
        memeImage.style.border = 3 + "px";
        memeImage.style.borderColor = "red";
        memeImage.style.borderStyle = "dashed";
    } else if(indicador == 2) {
        memeImage.style.border = 5 + "px";
        memeImage.style.borderColor = "blue";
        memeImage.style.borderStyle = "double";
    } else if(indicador == 3) {
        memeImage.style.border = 6 + "px";
        memeImage.style.borderColor = "green";
        memeImage.style.borderStyle = "groove";
    }
}

button1.addEventListener("click", function() {
    addBorder(1);
});

button2.addEventListener("click", function() {
    addBorder(2);
});

button3.addEventListener("click", function() {
    addBorder(3);
});
