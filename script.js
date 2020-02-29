// Get input and paste into the page
document.querySelector("#text-input").addEventListener('input', function (event) {
  document.querySelector("#meme-text").innerHTML = document.querySelector("#text-input").value;
})

var loadFile = function (event) {
  var image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
