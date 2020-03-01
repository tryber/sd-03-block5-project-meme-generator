//Escrever o texto do meme sobre a imagem

let textBox = document.getElementById('text-input');
let textMeme = document.getElementById('meme-text');
textBox.addEventListener('keyup', writeText);

function writeText() {
    textMeme.innerHTML = textBox.value;
}


//incluir imagem

let image = document.getElementById('meme-image');

function uploadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}


//mudando as bordas

let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")


button1.addEventListener("click", changeButton1)
button2.addEventListener("click", changeButton2)
button3.addEventListener("click", changeButton3)

function changeButton1() {
    document.getElementById("meme-image-container").style.border = "3px dashed red"
}

function changeButton2() {
    document.getElementById("meme-image-container").style.border = "5px double blue"
}

function changeButton3() {
    document.getElementById("meme-image-container").style.border = "6px groove green"
}




let meme1 = document.getElementById("meme-1")
meme1.addEventListener("click", preLoaded1)

function preLoaded1() {

    let imageMeme = document.getElementById("meme-image")

    imageMeme.src = "imgs/meme1.jpeg"

}

let meme2 = document.getElementById("meme-2")
meme2.addEventListener("click", preLoaded2)

function preLoaded2() {

    let imageMeme = document.getElementById("meme-image")

    imageMeme.src = "imgs/meme2.jpeg"

}

let meme3 = document.getElementById("meme-3")
meme3.addEventListener("click", preLoaded3)

function preLoaded3() {

    let imageMeme = document.getElementById("meme-image")

    imageMeme.src = "imgs/meme3.jpeg"

}

let meme4 = document.getElementById("meme-4")
meme4.addEventListener("click", preLoaded4)

function preLoaded4() {

    let imageMeme = document.getElementById("meme-image")

    imageMeme.src = "imgs/meme4.jpeg"

}