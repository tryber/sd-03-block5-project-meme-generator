let text_input = document.querySelector('#text-input');
let meme_text = document.querySelector('#meme-text');
let meme_image = document.querySelector('#meme-image');
let img_input = document.querySelector('#img-input');

text_input.addEventListener('input', function changeText(){
  meme_text.innerHTML = text_input.value
})

img_input.addEventListener('change', function() {
  document.getElementById('meme-image').src = window.URL.createObjectURL(this.files[0]);
})