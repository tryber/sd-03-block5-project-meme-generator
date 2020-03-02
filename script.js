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
}
