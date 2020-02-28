function inputImg() {
  let preview = document.querySelector("img");
  let file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
function inputText() {
  let textMeme = document.querySelector("input[type=text]").innerHTML;
}
function alertFunc() {
  alert(textMeme);
}
