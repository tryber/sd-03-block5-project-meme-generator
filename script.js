let addImage = document.getElementById("meme-insert");
let addText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");

function criandoUrl() {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(addImage.files[0]);
  image.style.height = 400 + "px";
  image.style.width = 400 + "px";
};

addImage.addEventListener("change", criandoUrl);
let texto = document.getElementById("text-input");
texto.addEventListener("input",exibir); 

function exibir(){
document.getElementById("meme-text").innerHTML = texto.value;
} 

document.getElementById("button1").addEventListener("click", function () {
  let imageContainer = document.getElementById("meme-image-container");
  // console.log(imageContainer);
  imageContainer.style.border = "3px dashed red";
});
document.getElementById("button2").addEventListener("click", function () {
  let imageContainer2 = document.getElementById("meme-image-container");
  imageContainer2.style.border = "5px dashed blue";
  imageContainer2.style.borderStyle = "double"
});
document.getElementById("button3").addEventListener("click", function () {
  let imageContainer3 = document.getElementById("meme-image-container");
  imageContainer3.style.border = "6px groove green";
});
