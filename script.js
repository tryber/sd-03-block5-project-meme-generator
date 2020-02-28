const img_input = document.getElementById('meme-insert');
const textinput = document.getElementById('text-input');

img_input.addEventListener ('change', function(){ 
    let file = window.URL.createObjectURL(this.files[0]);
    document.getElementById('meme-image').src = file ;
});

textinput.addEventListener('keyup', function(){
    document.getElementById('meme-text').innerText = textinput.value;
});

