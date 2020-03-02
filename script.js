function printText() {
    let textInput = document.querySelector("#text-input");
    document.querySelector("#text-output").innerHTML = textInput.value;

}

function loadImage(event) {
    let imgOutput = document.getElementById('meme-image');
    imgOutput.src = URL.createObjectURL(event.target.files[0]);
}

// test