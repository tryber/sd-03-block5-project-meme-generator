var digitando = document.getElementById('text-input')
var escrevendo = document.getElementById('meme-text')


digitando.addEventListener('input', function(){
escrevendo.innerHTML = digitando.value
})

var imginsert = document.getElementById('meme-insert').files[0];
var memeimage = document.getElementById('meme-image')

imginsert.addEventListener('change', function(){
memeimage.scr = URL.createObjectURL(imageinsert)
}
