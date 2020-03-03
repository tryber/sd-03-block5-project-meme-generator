window.onload= function(){
    let inputText=document.getElementById("text-input")
    let texto= document.getElementById("meme-text")
    function TextoDinamico(){
        texto.innerHTML=inputText.value
    }
    inputText.addEventListener("keydown", TextoDinamico)

    let image = document.getElementById("meme-image");
    function loadFile() {
        
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    let im = document.getElementById('meme-insert');
    im.addEventListener("change", loadFile)

    let container= document.getElementById("meme-image-container")

    function TrocaBorda1() {
        container.style.border= "3px dashed red"
    }
    let bt1= document.getElementById("button1")
    bt1.addEventListener("click", TrocaBorda1)

    function TrocaBorda2() {
        container.style.border= "5px double blue"
    }
    let bt2= document.getElementById("button2")
    bt2.addEventListener("click", TrocaBorda2)

    function TrocaBorda3() {
        container.style.border= "6px groove green"
    }
    let bt3= document.getElementById("button3")
    bt3.addEventListener("click", TrocaBorda3)

    function trocaImagem1(){
        image.src="imgs/meme1.jpeg"
    }
    let img1=document.getElementById("meme-1");
    img1.addEventListener("click", trocaImagem1);

    function trocaImagem2(){
        image.src="imgs/meme2.jpeg"
    }
    let img2=document.getElementById("meme-2");
    img2.addEventListener("click", trocaImagem2);

    function trocaImagem3(){
        image.src="imgs/meme3.jpeg"
    }
    let img3=document.getElementById("meme-3");
    img3.addEventListener("click", trocaImagem3);

    function trocaImagem4(){
        image.src="imgs/meme4.jpeg"
    }
    let img4=document.getElementById("meme-4");
    img4.addEventListener("click", trocaImagem4);

}