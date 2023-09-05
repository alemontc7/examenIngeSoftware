import frase from "./fraseador.js";
describe("Palabrear", () => {
  it("deberia retornar AB", () => {
    const palabreador = new frase("AB CD");
    expect(palabreador.getPrimeraPalabra()).toEqual("AB");
  });
});
