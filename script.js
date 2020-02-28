
  //Muda o placeholder da imagem pela imagem do input
  let input = document.getElementById("meme-image");

input.addEventListener('change',function () {
    let inputImg = input.files[0];
    let reader = new FileReader();
    let imagePH = document.getElementById("imagemPH");

    if (inputImg){
      reader.readAsDataURL(inputImg)
      console.log("lido");
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

    let textPH = document.getElementById("input-text");

    textPH.innerHTML = texto;


  })















