//Declarar funcion
function saludar() {
  console.log("¡Hola!");
}

// Llamar a la función
saludar(); // Imprime: ¡Hola!

//Funciones declaradas
function sumar(a, b) {
  return a + b;
}
//Funciones expresadas
const restar = function (a, b) {
  return a - b;
};

//Funciones flecha
const multiplicar = (a, b) => a * b;

//Funciones con parámetros y valores de retorno
function dividir(a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  }
  
  let resultado = dividir(10, 2); // resultado será 5
  console.log(resultado);
  