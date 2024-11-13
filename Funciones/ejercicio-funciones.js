//Ejercicio 1
function saludar() {
  console.log("¡Hola! Bienvenido al curso de JavaScript.");
}
saludar(); // Llamada a la función, imprime: ¡Hola! Bienvenido al curso de JavaScript.

//Ejercicio 2
const elevarAlCuadrado = function (num) {
  return num * num;
};
console.log(elevarAlCuadrado(5)); // Imprime: 25

//Ejercicio 3
const multiplicarPorTres = (num) => num * 3;
console.log(multiplicarPorTres(4)); // Imprime: 12

//Ejercicio 4
function calcularPromedio(num1, num2, num3) {
  let suma = num1 + num2 + num3;
  return suma / 3;
}
console.log(calcularPromedio(8, 6, 10)); // Imprime: 8
