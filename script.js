
let loadFile = function (event) {
  let image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);

}
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('memeText');

function textInsert() {
  memeText.textContent = textInput.value
}
let button1 = document.getElementById('button-1');
button1.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red'
})
let button2 = document.getElementById('button-2');
button2.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '5px double blue'
})


let button3 = document.getElementById('button-3');
button3.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '6px groove green'
})
