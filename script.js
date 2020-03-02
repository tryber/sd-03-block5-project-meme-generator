var digitando = document.getElementById('text-input')
var escrevendo = document.getElementById('meme-text')


digitando.addEventListener('input', function(){
escrevendo.innerHTML = digitando.value
})

document.getElementById("text-input").addEventListener("input", function(event) {
    document.getElementById("meme-text").innerHTML = document.getElementById("text-input").value;
  });

var loadFile = function(event) {
  var image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

