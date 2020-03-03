function trocaImg() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
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

function trocaText() {
  let imgText = document.querySelector("#text-input").value;
  document.getElementById("meme-text").innerHTML = imgText;
}
