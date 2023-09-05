//import sumar from "./sumador";

const frase = document.querySelector("#frase");
const form = document.querySelector("#descomponer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const laFrase = frase.value;

  div.innerHTML = "<p>" + laFrase + "</p>";
});
