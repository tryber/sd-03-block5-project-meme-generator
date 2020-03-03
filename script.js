let botaoImg = document.getElementById('add-text');
botaoImg.addEventListener('click',function(){
  document.querySelector('#text-space').innerHTML = document.querySelector('#text-input').value;
})