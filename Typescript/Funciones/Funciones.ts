// 1. Funciones con Parámetros Opcionales
function saludar(nombre: string, edad?: number): string {
    //si hay una edad
    if (edad) {
      return `Hola, ${nombre}. Tienes ${edad} años.`;
    }
    return `Hola, ${nombre}.`;
  }
  
  // Llamadas
  console.log(saludar("Boris")); // "Hola, Boris."
  console.log(saludar("Boris", 23)); // "Hola, Boris. Tienes 23 años."
  
  // 2. Funciones con Valor de Retorno void
  function imprimirMensaje(mensaje: string): void {
    console.log(mensaje);
  }
  
  // Llamada
  imprimirMensaje("Este es un mensaje importante.");
  
  // 3. Funciones con Parámetros de Tipo any
  function mostrarInfo(info: any): void {
    console.log("La información es:", info);
  }
  
  // Llamadas
  mostrarInfo("Texto simple");
  mostrarInfo(123);
  mostrarInfo([1, 2, 3]);
  
  // 4. Funciones Anónimas y Expresiones de Función
  const resta = function(a: number, b: number): number {
    return a - b;
  }
  
  // Llamada
  console.log(resta(10, 5)); // 5
  
  // 5. Funciones de Flecha
  const multiplicar = (a: number, b: number): number => a * b;
  
  // Llamada
  console.log(multiplicar(3, 4)); // 12
  