let textInput = document.getElementById("text-input");
let memeInsert = document.getElementById("meme-insert");

let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let meme1 = document.getElementById("meme1");
let meme2 = document.getElementById("meme2");
let meme3 = document.getElementById("meme3");

function addMeme() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}

memeInsert.addEventListener("change", addMeme);

function addText() {
    memeText.innerHTML = textInput.value;
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

function selectMeme(indicador) {
    if(indicador == 1) {
        memeImage.src = meme1.src;
    } else if(indicador == 2) {
        memeImage.src = meme2.src;
    } else if(indicador == 3) {
        memeImage.src = meme3.src;
    } else if (indicador == 4) {
        memeImage.src = meme4.src;
    }
}

meme1.addEventListener("click", function() {
    selectMeme(1);
});

meme2.addEventListener("click", function() {
    selectMeme(2);
});

meme3.addEventListener("click", function() {
    selectMeme(3);
});

meme4.addEventListener("click", function() {
    selectMeme(4);
});