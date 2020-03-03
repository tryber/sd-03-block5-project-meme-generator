window.onload = function() {
  document.getElementById('meme-insert').addEventListener('change', (event) => {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
  })

//  document.getElementById('text-input').addEventListener('keyup', (event) => {
//    document.getElementById('meme-text').innerHTML = event.target.value;
//  })
}

let text = document.getElementById('text');
let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', textWrite);
function textWrite() {
    text.innerHTML = textInput.value;
}

let imageCont = document.getElementById("meme-image-container");

let button1 = document.getElementById("button1");
button1.addEventListener("click", change1);

function change1() {
    imageCont.style.border = "3px dashed red";
}

let button2 = document.getElementById("button2");
button2.addEventListener("click", change2);

function change2() {
    imageCont.style.border = "5px double blue";
}

let button3 = document.getElementById("button3");
button3.addEventListener("click", change3);

function change3() {
    imageCont.style.border = "6px groove green";
}

let memeImage = document.getElementById("meme-image");

let memeInsert = document.getElementById("meme-insert");

memeInsert.addEventListener("change", memeAdd);

function memeAdd() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.style.height = 400 + "px";
    memeImage.style.width = 400 + "px";
}

let meme1 = document.getElementById("meme-1");
meme1.addEventListener("click", function () {
    memeImage.src = meme1.src;
})

let meme2 = document.getElementById("meme-2");
meme2.addEventListener("click", function () {
    memeImage.src = meme2.src;
})

let meme3 = document.getElementById("meme-3");
meme3.addEventListener("click", function () {
    memeImage.src = meme3.src;
})

let meme4 = document.getElementById("meme-4");
meme4.addEventListener("click", function () {
    memeImage.src = meme4.src;
})
