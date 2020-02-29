
 let loadFile = function(event) {
    var image = document.getElementById('loadedImage');
    image.src = URL.createObjectURL(event.target.files[0]);

}
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('memeText');

function textInsert () {
  memeText.textContent = textInput.value
}