
  //Muda o placeholder da imagem pela imagem do input
  let input = document.getElementById("meme-insert");


input.addEventListener('change',function () {
    let inputImg = input.files[0];
    let reader = new FileReader();
    let imagePH = document.getElementById("meme-image");

    if (inputImg){
      reader.readAsDataURL(inputImg)

    }
    reader.onloadend = function ()
    {
      imagePH.src = reader.result;
    }
  })


  //Coloca o texto sobre do meme sobre a imagem
  let textInput = document.getElementById("text-input");

  textInput.addEventListener('change',function (e) {
    let texto = e.target.value;

    let textPH = document.getElementById("meme-text");

    textPH.innerText = texto;


  })

  function button1() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "dashed";
    imagem.style.borderColor = "red";
    imagem.style.borderWidth = "3px";


  }

  function button2() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "double";
    imagem.style.borderColor = "blue";
    imagem.style.borderWidth = "5px";
  }

  function button3() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "groove";
    imagem.style.borderColor = "green";
    imagem.style.borderWidth = "6px";


  }


  let memes = document.getElementsByClassName('meme');
  for (meme of memes){
    meme.addEventListener('click',function(e){
      let imagePH = document.getElementById("meme-image");
      imagePH.src = e.target.src;
    })}
















