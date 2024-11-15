// Función para sumar
function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar
  function restar(a, b) {
    return a - b;
  }
  
  // Función para multiplicar
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Función para dividir
  function dividir(a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  }
  
  // Función para mostrar el resultado
  function mostrarResultado(operacion, a, b) {
    switch (operacion) {
      case "sumar":
        console.log(`Resultado: ${sumar(a, b)}`);
        break;
      case "restar":
        console.log(`Resultado: ${restar(a, b)}`);
        break;
      case "multiplicar":
        console.log(`Resultado: ${multiplicar(a, b)}`);
        break;
      case "dividir":
        console.log(`Resultado: ${dividir(a, b)}`);
        break;
      default:
        console.log("Operación no válida");
    }
  }


  // Realizar operaciones con dos números
mostrarResultado("sumar", 10, 5);        // Resultado: 15
mostrarResultado("restar", 10, 5);       // Resultado: 5
mostrarResultado("multiplicar", 10, 5);  // Resultado: 50
mostrarResultado("dividir", 10, 5);      // Resultado: 2

// Intentar dividir por cero
mostrarResultado("dividir", 10, 0);      // Resultado: No se puede dividir por cero