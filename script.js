var digitando = document.getElementById('text-input')
var escrevendo = document.getElementById('meme-text')


digitando.addEventListener('input', function(){
escrevendo.innerHTML = digitando.value
})



var loadFile = function(event) {
  var image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

