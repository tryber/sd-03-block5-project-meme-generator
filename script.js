

let input = document.getElementById("inputImage");

input.addEventListener('change',function ()
{alert("Foi adicionado");
  let imagemMeme = input.files[0];
  let imagemPH = document.getElementById("meme-image");
  let reader = new FileReader();

  if (imagemMeme){
    reader.readAsDataURL(imagemMeme);
  }

  reader.onloadend = function(){
    imagemPH.src = reader.result;
    console.log(reader.result)
  };


})



