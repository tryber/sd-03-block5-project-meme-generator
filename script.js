var loadFile = function(event) {
  var output = document.getElementById("meme-image");
  output.src = URL.createObjectURL(event.target.files[0]);
};

let textBox = document.getElementById("text-input");
textBox.addEventListener("input", function() {
  let textImage = document.getElementById("meme-text");
  textImage.innerHTML = textBox.value;
});

let allButtons = document.querySelectorAll(".button");
let divFix = document.querySelector(".div-fix");
for (let i = 0; i < allButtons.length; i += 1) {
  let divBorders = ["3px dashed red", "5px double blue", "6px groove green"];
  allButtons[i].addEventListener("click", function() {
    divFix.style.border = divBorders[i];
  });
}

let memeImage = document.querySelector("#meme-image");
let allMemes = document.querySelectorAll(".meme");

for (let i = 0; i < allMemes.length; i += 1) {
  allMemes[i].addEventListener("click", function() {
    memeImage.src = `./imgs/meme${i + 1}.jpeg`;
  });
}
