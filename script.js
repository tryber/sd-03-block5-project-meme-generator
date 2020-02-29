window.onload = () => {
  document.getElementById("meme-insert").addEventListener("change", event => document.getElementById("meme-image").src = URL.createObjectURL(event.target.files[0]));
  document.getElementById("text-input").addEventListener("keyup", event => document.getElementById("meme-text").innerHTML = event.target.value);
  document.getElementById("button1").addEventListener("click", () => document.getElementById("meme-image-container").style.border = "3px dashed red");
  document.getElementById("button2").addEventListener("click", () => document.getElementById("meme-image-container").style.border ="5px double blue");
  document.getElementById("button3").addEventListener("click", () => document.getElementById("meme-image-container").style.border = "6px groove green");
  document.getElementById("meme-1").addEventListener("click", () => document.getElementById("meme-image").src = "imgs/meme-1.jpeg");
  document.getElementById("meme-2").addEventListener("click", () => document.getElementById("meme-image").src = "imgs/meme-2.jpeg");
  document.getElementById("meme-3").addEventListener("click", () => document.getElementById("meme-image").src = "imgs/meme-3.jpeg");
  document.getElementById("meme-4").addEventListener("click", () => document.getElementById("meme-image").src = "imgs/meme-4.jpeg");
};
