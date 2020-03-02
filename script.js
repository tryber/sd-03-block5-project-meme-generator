var digitando = document.getElementById('text-input')
var escrevendo = document.getElementById('meme-text')


digitando.addEventListener('input', function(){
escrevendo.innerHTML = digitando.value
})


const resultado = document.getElementById('meme-image')
const imguser = document.getElementById('meme-insert')

imguser.addEventListener('change', function (event) {
    resultado.src = URL.createObjectURL(event.target.files[0]);
});

