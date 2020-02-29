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

let firstPhoto = document.querySelector("#meme1");
firstPhoto.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image");
    box.setAttribute('src', firstPhoto.src);
})

let secondPhoto = document.querySelector("#meme2");
secondPhoto.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image");
    box.setAttribute('src', secondPhoto.src);
})

let thirdPhoto = document.querySelector("#meme3");
thirdPhoto.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image");
    box.setAttribute('src', thirdPhoto.src);
})

let fourthPhoto = document.querySelector("#meme4");
fourthPhoto.addEventListener("click", function(event){
    let box = document.querySelector("#meme-image");
    box.setAttribute('src', fourthPhoto.src);
})