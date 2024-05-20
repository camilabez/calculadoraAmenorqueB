const form = document.getElementById("form-calculadora");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".mensagem-valida").style.display = "none";
  document.querySelector(".mensagem-invalida-igual").style.display = "none";
  document.querySelector(".mensagem-invalida").style.display = "none";
  const campoA = document.getElementById("campo-a");
  const campoB = document.getElementById("campo-b");
  if (campoA.value < campoB.value) {
    document.querySelector(".mensagem-valida").style.display = "block";
  } else if (campoA.value == campoB.value) {
    document.querySelector(".mensagem-invalida-igual").style.display = "block";
  } else {
    document.querySelector(".mensagem-invalida").style.display = "block";
  }
  campoA.value = "";
  campoB.value = "";
});
