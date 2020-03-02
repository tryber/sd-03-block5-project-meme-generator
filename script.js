window.onload = function () {
  let txt = document.getElementById('text-input');
  let image = document.getElementById('meme-insert');
  let imageUrl = document.getElementById('uploadeUrl');
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
  txt.addEventListener('keyup', function mostrarTxt() {
    result.innerText = txt.value;
  })

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
  image.addEventListener('change', openFile)

  //Botões de borda
  btn1.addEventListener('click', function borda1() {
    borda.style.borderColor = 'red';
    borda.style.borderStyle = 'dashed';
    borda.style.borderWidth = '3px';
  })

  btn2.addEventListener('click', function borda2() {
    borda.style.borderColor = 'blue';
    borda.style.borderStyle = 'double';
    borda.style.borderWidth = '5px';
  })

  btn3.addEventListener('click', function borda3() {
    borda.style.borderColor = 'green';
    borda.style.borderStyle = 'groove';
    borda.style.borderWidth = '6px';
  })

  //Miniaturas de meme a escolha
  meme1.addEventListener('click', function chooseMeme1() {
    memeImage.scr = meme1.src;
  })
}