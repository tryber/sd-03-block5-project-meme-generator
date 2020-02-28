window.onload = function() {

    let inputText = document.getElementById('text-input')
    let inputImage = document.getElementById('meme-insert');
    let p = document.getElementById('meme-text');
    let image = document.getElementById('meme-image')
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');

    //UploadImage
    function uploadImage(event) {
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    inputImage.addEventListener("change", uploadImage);

    //Meme Text
    function showText() {
        p.innerHTML = inputText.value;
    }
    inputText.addEventListener("keydown", showText);

    //Border Buttons
    function borderButton1() {
        image.style.border = "dashed red 3px";
    }
    button1.addEventListener('click', borderButton1);

    function borderButton2() {
        image.style.border = "double blue 5px";
    }
    button2.addEventListener('click', borderButton2);

    function borderButton3() {
        image.style.border = "groove green 6px";
    }
    button3.addEventListener('click', borderButton3);

};