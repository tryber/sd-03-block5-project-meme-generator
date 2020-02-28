let textInput = document.getElementById("text-input");
let memeInsert = document.getElementById("meme-insert");

let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function addMeme() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}

function addText() {
    memeText.innerHTML = textInput.value;
}

function addBorder(indicador) {
    if (indicador == 1) {
        memeImage.style.borderColor = "red";
        memeImage.style.borderWidth = 3 + "px";
        memeImage.style.borderStyle = "dashed";
    } else if (indicador == 2) {
        memeImage.style.borderColor = "blue";
        memeImage.style.borderWidth = 5 + "px";
        memeImage.style.borderStyle = "double";
    } else if (indicador == 3) {
        memeImage.style.borderColor = "green";
        memeImage.style.borderWidth = 6 + "px";
        memeImage.style.borderStyle = "groove";
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
