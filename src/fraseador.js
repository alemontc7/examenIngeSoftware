class frase
{
  constructor(fraseI)
  {
    this.laFrase = fraseI;
  }
  getPrimeraPalabra()
  {
    const fraseAUsar = this.laFrase;
    return fraseAUsar.split(" ")[0];
  }
  getFraseCompleta()
  {
    return this.laFrase;
  }
  getFraseEnMinusculas()
  {
    return this.laFrase.toLowerCase();
  }
  getPalabraEnMinusculas(palabra)
  {
    return palabra.toLowerCase();
  }
}

export default frase;
