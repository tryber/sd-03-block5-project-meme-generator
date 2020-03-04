// Exibe imagem: 
  imageReader = function (event) {
  let input = event.target;
  let reader = new FileReader();
  reader.onload = function() {
    let imageURL = reader.result;
    let showImg = document.getElementById('meme-image');
    showImg.src = imageURL;
  };
  reader.readAsDataURL(input.files[0]);
};

// Exibe texto:
const memeText = document.querySelector('input#text-input');

function displayText() {
  let textInput = memeText.value;
  let textOutput = document.getElementById('meme-text');
  textOutput.innerHTML = textInput;
}

//Event Listeners

memeText.addEventListener('keyup', displayText);


