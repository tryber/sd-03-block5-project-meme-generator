const img_input = document.getElementById('meme-insert');
const textinput = document.getElementById('text-input');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const container = document.getElementById('meme-image-container');
const memes_prontos = document.querySelectorAll('.model');

img_input.addEventListener ('change', function(){ 
    let file = window.URL.createObjectURL(this.files[0]);
    document.getElementById('meme-image').src = file ;
});

textinput.addEventListener('keyup', function(){
    document.getElementById('meme-text').innerText = textinput.value;
});

btn1.addEventListener('click', function(){
    container.style.border = "3px dashed red";
});

btn2.addEventListener('click', function(){
    container.style.border = "5px double blue";
});

btn3.addEventListener('click', function(){
    container.style.border = "6px groove green";
});

[].forEach.call(memes_prontos, meme => {
    meme.addEventListener('click', function(){
        document.getElementById('meme-image').src = this.src;
    });
});