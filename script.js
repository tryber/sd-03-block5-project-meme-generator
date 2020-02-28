let text_input = document.querySelector('#text-input');
let meme_text = document.querySelector('#meme-text');
let meme_image = document.querySelector('#meme-image');
let meme_insert = document.querySelector('#meme-insert');

text_input.addEventListener('input', function changeText(){
  meme_text.innerHTML = text_input.value
})

meme_insert.addEventListener('change', function() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
})