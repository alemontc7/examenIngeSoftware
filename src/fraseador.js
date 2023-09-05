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
}

export default frase;
