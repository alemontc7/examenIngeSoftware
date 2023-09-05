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

  it("deberia retornar AEl,password,de,mi,cuenta,es,PASSWORD,Es,un,password,de,poco,cuidado", () => {
    const palabreador = new frase("El password de mi cuenta es PASSWORD . Es un password de poco cuidado");
    expect(palabreador.getListaDePalabrasLimpiadas()).toEqual(["El","password","de","mi","cuenta","es","PASSWORD","Es","un","password","de","poco","cuidado"]);
  });
});
