window.onload = function() {
  document.getElementById('meme-insert').addEventListener('change', (event) => {
    document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
  })

  document.getElementById('text-input').addEventListener('keyup', (event) => {
    document.getElementById('meme-text').innerHTML = event.target.value;
  })
};
