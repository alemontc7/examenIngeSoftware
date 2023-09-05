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
  getListaDePalabrasLimpiadas()
  {
    const frase1 = this.laFrase.split(" ");
    const array = [];
    for(const elemento in frase1)
    {
      console.log(frase1[elemento]);
        if(frase1[elemento] != "-" && frase1[elemento] != "," && frase1[elemento] != "." && frase1[elemento] != ";")
        {
          array.push(frase1[elemento]);
          
        }
    }
    return array;
  }
}

export default frase;
