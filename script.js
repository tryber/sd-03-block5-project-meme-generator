let text_input = document.querySelector('#text-input');
let text_input2 = document.querySelector('#text-input2');
let meme_text = document.querySelector('#meme-text');
let meme_text2 = document.querySelector('#meme-text2');
let meme_image = document.querySelector('#meme-image');
let meme_insert = document.querySelector('#meme-insert');

text_input.addEventListener('input', function() {
  meme_text.innerHTML = text_input.value
})

text_input2.addEventListener('input', function() {
  meme_text2.innerHTML = text_input2.value
})

meme_insert.addEventListener('change', function() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
})