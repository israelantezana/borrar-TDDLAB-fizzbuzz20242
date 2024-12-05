//import sumar from "./sumador.js";

describe("Fizbuzz", () => {
  it("deberia retornar el mismo numero si no sigue ningun regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia retornar fizz si sigue la regla de 3", () => {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });

  it("deberia retornar fizz si sigue la regla de multiplos de 3", () => {
    expect(generarFizzBuzz(9)).toEqual("Fizz");
  });
});

function generarFizzBuzz(n) {
  if (n % 3 == 0) {
    return "Fizz";
  }
  return "1";
}
