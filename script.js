let botaoImg = document.getElementById('add-text');
botaoImg.addEventListener('click',function(){
  document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
})