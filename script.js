let textBox = document.getElementById('text-input');
let textOutput = document.getElementById('meme-text');
let image = document.getElementById('meme-image');
let imgDiv = document.getElementById('meme-image-container');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

textBox.addEventListener('keyup', changeText);
button1.addEventListener('click', changeBorder1);
button2.addEventListener('click', changeBorder2);
button3.addEventListener('click', changeBorder3);

function changeText () {
    textBox.value.toUpperCase();
    textOutput.innerHTML = textBox.value;
}

function carregarimagem() {
    image.src = URL.createObjectURL(event.target.files[0]);
}

function changeBorder1() {
    imgDiv.style.border = '3px dashed red'
}

function changeBorder2() {
    imgDiv.style.border = '5px double blue'
}

function changeBorder3 () {
    imgDiv.style.border = '6px groove green'
}
