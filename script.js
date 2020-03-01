window.onload= function(){
    let Text=document.getElementById("text-input")
    let TextImg= document.getElementById("meme-text")
    function TextoDinamico(){
        TextImg.innerText=Text.value
    }
    Text.addEventListener("keydown", TextoDinamico)

    let image = document.getElementById("meme-image");
    function loadFile() {
        image.src = URL.createObjectURL(event.target.files[0]);
        image.innerHTML=TextImg.target.value
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

    function trocaImagen1(){
        image.src="download.jpeg"
    }
    let img1=this.document.getElementsByTagName("img")[1];
    img1.addEventListener("click", trocaImagen1)

    function trocaImagen2(){
        image.src="XSYHaEkL.jpg"
    }
    let img2=this.document.getElementsByTagName("img")[2];
    img2.addEventListener("click", trocaImagen2)

    function trocaImagen3(){
        image.src="download (1).jpeg"
    }
    let img3=this.document.getElementsByTagName("img")[3];
    img3.addEventListener("click", trocaImagen3)
}