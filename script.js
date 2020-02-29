const tinput = document.querySelector("#text-input");
const box = document.querySelector("#meme-text");
function inputText () {
    box.innerText = tinput.value;
}
tinput.addEventListener("keyup", inputText);

function upload() {
    var image = document.getElementById("meme-image");
    var file = document.querySelector('#meme-insert').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        image.src = reader.result;
    });

    if (file) {
        reader.readAsDataURL(file);
      }
  }

let firstButton = document.querySelector("#button1");
firstButton.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image-container");
    box.style.borderStyle="dashed";
    box.style.borderColor="red";
    box.style.borderWidth="3px";
})

let secondButton = document.querySelector("#button2");
secondButton.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image-container");
    box.style.borderStyle="double";
    box.style.borderColor="blue";
    box.style.borderWidth="5px";
})

let thirdButton = document.querySelector("#button3");
thirdButton.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image-container");
    box.style.borderStyle="groove";
    box.style.borderColor="green";
    box.style.borderWidth="6px";
})

let Photo = document.querySelectorAll(".loadedPhotos");
for (let i = 0; i < Photo.length; i += 1) {
    Photo[i].addEventListener("click", function(event){
        let box = document.querySelector("#meme-image");
        box.setAttribute('src', Photo[i].src);
})
}
