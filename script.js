const tinput = document.querySelector("#text-input");
const box = document.querySelector("#text");
function inputText () {
    box.innerText = tinput.value;
}
tinput.addEventListener("keyup", inputText);

function upload() {
    var image = document.createElement("img");
    document.getElementById("image").appendChild(image);
    image.id = "meme-image";
    image.style.maxWidth= "500px";
    image.style.maxHeight= "500px";
    
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        image.src = reader.result;
    });
  
    if (file) {
        reader.readAsDataURL(file);
      } 
  }