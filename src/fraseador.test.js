import frase from "./fraseador.js";
describe("Palabrear", () => {
  it("deberia retornar AB", () => {
    const palabreador = new frase("AB CD");
    expect(palabreador.getPrimeraPalabra()).toEqual("AB");
  });

  it("deberia retornar AB", () => {
    const palabreador = new frase("ASDBNB SFD KDHSA DSA DH SJA HD");
    expect(palabreador.getFraseEnMinusculas()).toEqual("asdbnb sfd kdhsa dsa dh sja hd");
  });
});
