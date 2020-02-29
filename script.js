let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let image = document.getElementById("meme-image");
let imgDiv = document.getElementById('meme-image-container'); //mudar nomde desse let?!
// adicionar lets pro botões

texto.addEventListener("keyup", escreveText);
// adicionar chamadas de funções por clicks dos botões

function escreveText() {
  textOutput.innerHTML = texto.value;
}

function loadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}

// adicionar funções pros clicks dos botões
