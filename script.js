function insereTexto() {
  const texto = document.getElementById("text-input").value;
  texto.addEventListener('keyup',insereTexto);
  document.innerHTML = texto.value;

}

document.querySelector("")