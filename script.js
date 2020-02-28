const tinput = document.querySelector("#text-input");
const box = document.querySelector("#box");
function inputText () {
    box.innerText = tinput.value;
}
tinput.addEventListener("keyup", inputText);

function upload() {
    var image = document.createElement("img");
    document.getElementById("box").appendChild(image);
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
      console.log('before preview');
      preview.src = reader.result;
      console.log('after preview');
    }, false);
  
    if (file) {
      console.log('inside if');
      reader.readAsDataURL(file);
    } else {
      console.log('inside else');
    }

  }