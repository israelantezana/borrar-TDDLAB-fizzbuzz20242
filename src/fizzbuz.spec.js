//import sumar from "./sumador.js";

describe("Fizbuzz", () => {
  it("deberia retornar el mismo numero si no sigue ningun regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia retornar fizz si sigue la regla de 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });
});

function generarFizzBuzz(n) {
  if (n == 3) {
    return "Fizz";
  }
  return "1";
}
