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
  let output = document.querySelector("#meme-text");
  let meme = document.querySelector("#text-input");
  output.addEventListener("keyup",function(){
    
        output.innerHTML = meme.target.value;
  })
