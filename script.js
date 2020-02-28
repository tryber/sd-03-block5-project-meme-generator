const img_input = document.getElementById('input-img');
const textinput = document.getElementById('text-input');
const memetextup = document.getElementById('textup');

const imgbox = document.getElementById('imgbox');

img_input.addEventListener ('change', function(){ 
    document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
});

textinput.addEventListener('keyup', function(){
    document.getElementById('meme-text').innerText = textinput.value;
});

memetextup.addEventListener('keyup', function(){
    document.getElementById('memeup').innerText = memetextup.value;
});