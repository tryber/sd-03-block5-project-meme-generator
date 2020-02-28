// Iniciar variáveis
let topTextInput,
  bottomTextInput,
  topTextSizeInput,
  bottomTextSizeInput,
  imageInput,
  generateBtn,
  canvas,
  ctx;

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  let fontSize;

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";
  ctx.fontWeigth = "bold";

  //Tamanho Texto de cima
  fontSize = canvas.width * topTextSize;
  ctx.font = fontSize + "px Arial";
  ctx.lineWidth = fontSize / 30;

  //Texto de cima
  ctx.textBaseline = "top";
  topText.split("\n").forEach(function(text, index) {
    ctx.fillText(text, canvas.width / 2, index * fontSize, canvas.width);
    ctx.strokeText(text, canvas.width / 2, index * fontSize, canvas.width);
  });
  //Tamanho texto de baixo
  fontSize = canvas.width * bottomTextSize;
  ctx.font = fontSize + "px Arial";
  ctx.lineWidth = fontSize / 30;

  //Texto de baixo
  ctx.textBaseline = "bottom";
  bottomText
    .split("\n")
    .reverse()
    .forEach(function(text, index) {
      ctx.fillText(
        text,
        canvas.width / 2,
        canvas.height - index * fontSize,
        canvas.width
      );
      ctx.strokeText(
        text,
        canvas.width / 2,
        canvas.height - index * fontSize,
        canvas.width
      );
    });
}

//Função pra iniciar
function init() {
  console.log("MemeGeneratorJS");
  topTextInput = document.getElementById("text-input");
  bottomTextInput = document.getElementById("bottom-text");
  topTextSizeInput = document.getElementById("top-text-size-input");
  bottomTextSizeInput = document.getElementById("bottom-text-size-input");
  imageInput = document.getElementById("image-input");
  generateBtn = document.getElementById("generate-btn");
  canvas = document.getElementById("meme-image");

  ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 0;
  generateBtn.addEventListener("click", function() {
    let reader = new FileReader();
    reader.onload = function() {
      let img = new Image();
      img.src = reader.result;
      generateMeme(
        img,
        topTextInput.value,
        bottomTextInput.value,
        topTextSizeInput.value,
        bottomTextSizeInput.value
      );
    };
    reader.readAsDataURL(imageInput.files[0]);
  });
}

init();
