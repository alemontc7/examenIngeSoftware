import frase from "./fraseador";
const fraseDoc = document.querySelector("#frase");
const form = document.querySelector("#descomponer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const laFrase = fraseDoc.value;
  const palabreador = new frase(laFrase);
  div.innerHTML += "<br> Frase ingresada es:" + palabreador.getFraseCompleta() ;
  div.innerHTML += "<br> Primera palabra de la frase es:" + palabreador.getPrimeraPalabra() ;
  div.innerHTML += "<br> Frase en minusculas es:" + palabreador.getFraseEnMinusculas() ;
  div.innerHTML += "<br> Primera palabra en minuculas:" + palabreador.getPalabraEnMinusculas(palabreador.getPrimeraPalabra()) ;



});
