function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
window.onload = () => {
  document.getElementById("text-input").addEventListener("keyup",
    event => document.getElementById("meme-text").innerHTML = event.target.value);
  document.getElementById("meme-1").addEventListener("click", function() {
    document.getElementById("meme-image").src = "./imgs/meme1.jpeg";})
  document.getElementById("meme-2").addEventListener("click", function() {
    document.getElementById("meme-image").src = "./imgs/meme2.jpeg";})
  document.getElementById("meme-3").addEventListener("click", function() {
    document.getElementById("meme-image").src = "./imgs/meme3.jpeg";})
  document.getElementById("meme-4").addEventListener("click", function() {
    document.getElementById("meme-image").src = "./imgs/meme4.jpeg";})
  document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("meme-image-container").classList.replace
    (document.getElementById("meme-image-container").classList[0],"button1");})
  document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("meme-image-container").classList.replace
    (document.getElementById("meme-image-container").classList[0],"button2");})
  document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("meme-image-container").classList.replace
    (document.getElementById("meme-image-container").classList[0],"button3");})
}
