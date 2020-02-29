//Escrever o texto do meme sobre a imagem

let textBox = document.getElementById('text-input');
let textMeme = document.getElementById('meme-text');
textBox.addEventListener('keyup', writeText);

function writeText () {
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


button1.addEventListener("click",changeButton1)
button2.addEventListener("click",changeButton2)
button3.addEventListener("click",changeButton3)

function changeButton1(){
    document.getElementById("meme-image-container").style.border = "3px dashed red"
}

function changeButton2(){
    document.getElementById("meme-image-container").style.border = "5px double blue"
}

function changeButton3(){
    document.getElementById("meme-image-container").style.border = "6px groove green"
}


//memes prontos

    let images = document.querySelectorAll(".images")

    for (let i in images) {
    images[i].addEventListener("click", preLoaded)

    let imageMeme = document.getElementById("meme-image")

    function preLoaded(){
        if (i == 0){
            imageMeme.src = "imgs/meme1.jpeg"
        }
        if (i == 1){
            imageMeme.src = "imgs/meme2.jpeg"
        }
        if (i == 2){
            imageMeme.src = "imgs/meme3.jpeg"
        }
        if (i == 3){
            imageMeme.src = "imgs/meme4.jpeg"
        }
    }
 
    }

