// 1. Función con parámetros opcionales
function saludo(nombre?: string): void {
  if (nombre) {
    console.log(`Hola, ${nombre}!`);
  } else {
    console.log("Hola, invitado!");
  }
}

// 2. Función que retorna un valor
function sumar(a: number, b: number): number {
  return a + b;
}

// 3. Función con parámetros de tipo any
function imprimirDatos(dato: any): void {
  console.log(dato);
}

// 4. Función anónima
const multiplicacion = function (a: number, b: number): number {
  return a * b;
};

// 5. Función de flecha
const restar = (a: number, b: number): number => a - b;

// Pruebas
saludo("Boris"); // Hola, Boris!
saludo();        // Hola, invitado!

console.log(sumar(5, 3));  // 8
imprimirDatos("Texto");    // Texto
console.log(multiplicacion(4, 2));  // 8
console.log(restar(10, 4));      // 6
