window.onload = function() {
  document.getElementById('meme-insert').addEventListener('change', (event) => {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
  })

  document.getElementById('text-input').addEventListener('keyup', (event) => {
    document.getElementById('meme-text').innerHTML = event.target.value;
  })
}

let memeInsert = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
let imageCont = document.getElementById("meme-image-container");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let meme1 = document.getElementById("meme-1");
let meme2 = document.getElementById("meme-2");
let meme3 = document.getElementById("meme-3");
let meme4 = document.getElementById("meme-4");

memeInsert.addEventListener("change", memeAdd);

function memeAdd() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.style.height = 400 + "px";
    memeImage.style.width = 400 + "px";
}

button1.addEventListener("click", change1);

function change1() {
    imageCont.style.border = "3px dashed red";
}

button2.addEventListener("click", change2);

function change2() {
    imageCont.style.border = "5px double blue";
}

button3.addEventListener("click", change3);

function change3() {
    imageCont.style.border = "6px groove green";
}

meme1.addEventListener("click", function () {
    memeImage.src = meme1.src;
});

meme2.addEventListener("click", function () {
    memeImage.src = meme2.src;
});

meme3.addEventListener("click", function () {
    memeImage.src = meme3.src;
});

meme4.addEventListener("click", function () {
    memeImage.src = meme4.src;
});
