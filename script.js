//Upando Imagem
function uploadIMG(event) {
    var image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.height = 400 + "px";
    image.style.width = 400 + "px";
};
//Escolhendo Imagem
function selectedIMG(memeImage) {
    var image = document.getElementById('meme-image');
    image.src = memeImage;    
    image.style.height = 400 + "px";
    image.style.width = 400 + "px";
    if (keyBoard >= 1) {
        image.style.height = 390 + "px";
        image.style.width = 390 + "px";
    } 
}
//Configurando o Texto
let textoCima = document.getElementById("text-input")
let textoBaixo = document.getElementById("text-input-down")

textoCima.addEventListener("keyup",function(){
    let mensagem = document.getElementById("meme-text")
    mensagem.innerText = this.value;
})

textoBaixo.addEventListener("keyup",function(){
    let mensagem = document.getElementById("meme-text-down")
    mensagem.innerText = this.value;
})
//Adicionando bordas
function changeBoard(par) {
    let div = document.getElementById("meme-image")
    if (par == 1) {
        div.style.borderColor = "red";
        div.style.borderWidth = 3 + "px";
        div.style.borderStyle = "dashed";
        div.style.height = 390 + "px";
        div.style.width = 390 + "px";
        keyBoard = 1;
    } 
    else if (par == 2) {
        div.style.borderColor = "blue";
        div.style.borderWidth = 5 + "px";
        div.style.borderStyle = "double";
        div.style.height = 390 + "px";
        div.style.width = 390 + "px";
        keyBoard = 1;
    } 
    else if (par == 3) {
        div.style.borderColor = "green";
        div.style.borderWidth = 6 + "px";
        div.style.borderStyle = "groove";
        div.style.height = 390 + "px";
        div.style.width = 390 + "px";
        keyBoard = 1;
    }
}
//Baixando Imagem editada
