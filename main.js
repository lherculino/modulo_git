const form = document.getElementById("form-validaMaior");
let valorA = document.getElementById("valorA");
let valorB = document.getElementById("valorB");

const mensagemSucesso = `Formulário válido. O valor de B é maior que valor de A`;
const mensagemNegativa = `Formulário inválido. O Valor de B é igual ou menor que Valor de A`;

function validaMaior(valorA, valorB) {
  if (valorB.value > valorA.value) {
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    valorA.value = "";
    valorB.value = "";
  } else {
    const containerMensagemNegativa = document.querySelector(".error-message");
    containerMensagemNegativa.innerHTML = mensagemNegativa;
    const containerMensagemErro = document.querySelector(".error-message");
    containerMensagemErro.style.display = "block";
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validaMaior(valorA, valorB);
});
