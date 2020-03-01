
let textIn = document.getElementById("text-input");
let textOut = document.getElementById("meme-text");
let image = document.getElementById("meme-image");
let butt1 = document.getElementById("button1");
let butt2 = document.getElementById("button2");
let butt3 = document.getElementById("button3");
let imgChan = document.getElementsByClassName("image-box");

textIn.addEventListener("keyup", changetxt);
butt1.addEventListener("click", border1);
butt2.addEventListener("click", border2);
butt3.addEventListener("click", border3);

function changetxt () {
    textIn.value.toUpperCase();
    textOut.innerHTML = textIn.value;
}

function loadImage () {
    image.src = URL.createObjectURL(event.target.files[0]);
}
 
function border1 () {
    imgChan.style.border = "3px dashed red"
}

function border2 () {
    imgChan.style.border = "5px double blue"
}

function border3 () {
    imgChan.style.border = "6px groove green"
}
