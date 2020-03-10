window.onload = function () {
    image.addEventListener('change', openFile);
    inputTexto.addEventListener('keyup', digitarTexto);

    btn1.addEventListener('click', pressBotao1);
    btn2.addEventListener('click', pressBotao2);
    btn3.addEventListener('click', pressBotao3);

    meme1.addEventListener('click', escolha1);
    meme2.addEventListener('click', escolha2);
    meme3.addEventListener('click', escolha3);
    meme4.addEventListener('click', escolha4);
}
    let inputTexto = document.getElementById('text-input');
    let image = document.getElementById('meme-insert');
    let memeImage = document.getElementById('meme-image');
    let result = document.getElementById('meme-text');

    let borda = document.getElementById('meme-image-container');

    let btn1 = document.getElementById('button1');
    let btn2 = document.getElementById('button2');
    let btn3 = document.getElementById('button3');
    let meme1 = document.getElementById('meme-1');
    let meme2 = document.getElementById('meme-2');
    let meme3 = document.getElementById('meme-3');
    let meme4 = document.getElementById('meme-4');

  //Caixa de texto
let digitarTexto = function mostrarTxt() {
    result.innerText = inputTexto.value;
}

  //Display da imagem
let openFile = function(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function(){
    let dataURL = reader.result;
    memeImage.src = dataURL;
    };
reader.readAsDataURL(input.files[0]);
};

  //Botões de borda
let pressBotao1 = function borda1() {
    borda.style.borderColor = 'red';
    borda.style.borderStyle = 'dashed';
    borda.style.borderWidth = '3px';
}
let pressBotao2 = function borda2() {
    borda.style.borderColor = 'blue';
    borda.style.borderStyle = 'double';
    borda.style.borderWidth = '5px';
}
let pressBotao3 = function borda3() {
    borda.style.borderColor = 'green';
    borda.style.borderStyle = 'groove';
    borda.style.borderWidth = '6px';
}
  //Miniaturas de meme a escolha
let escolha1 = function chooseMeme1() {
    memeImage.src = meme1.src;
}
let escolha2 = function chooseMeme2() {
    memeImage.src = meme2.src;
}
let escolha3 = function chooseMeme3() {
    memeImage.src = meme3.src;
}
let escolha4 = function chooseMeme4() {
    memeImage.src = meme4.src;
}