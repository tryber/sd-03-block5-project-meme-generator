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
