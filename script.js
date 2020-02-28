window.onload = function() {
	previewFiles();
	textInput();
}

function previewFiles() {

  let preview = document.querySelector('#preview');
  let files   = document.getElementById('meme-image').files;
// let files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {
    let reader = new FileReader();
    
    reader.addEventListener("load", function () {
    let image = new Image();
		image.height = 512;
		image.width = 512;
    image.title = file.name;
    image.src = this.result;
    preview.appendChild( image );
    }, false);

      reader.readAsDataURL(file);
  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

function textInput(topText, bottomText) {

  let topTextInput = document.querySelector('#meme-text');
  let bottomTextInput = document.querySelector('#text-input');

  topTextInput.addEventListener("keyup", function() {
    textInput = topTextInput.innerHTML;
    console.log(topTextInput);
    textInput.appendChild( preview );

  })
  
}
