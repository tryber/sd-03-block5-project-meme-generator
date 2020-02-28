function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
  let meme = document.querySelector("#text-input");
  let output = document.querySelector("#meme-text");
  output.addEventListener("keyup",function(){
      output.innerText = meme.value;
  })      