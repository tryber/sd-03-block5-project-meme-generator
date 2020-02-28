let textInput =
document.querySelector("#text-input")

let memeText =
document.querySelector("#meme-text")

var loadFile = function(event) {
	let memeText = document.getElementById('meme-image');
	memeText.src = URL.createObjectURL(event.target.files[0]);
};