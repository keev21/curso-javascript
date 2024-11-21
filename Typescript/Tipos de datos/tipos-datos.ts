//let para variables que cambian.
//const para valores constantes.

// string: Representa texto
let nombre: string = "Boris";
console.log("Nombre:", nombre);

// number: Representa números (enteros o decimales)
let edad: number = 23;
let altura: number = 1.7; // en metros
console.log("Edad:", edad, "| Altura:", altura, "metros");

// boolean: Representa valores de verdadero o falso
let esEstudiante: boolean = false;
console.log("¿Es estudiante?", esEstudiante);

// any: Permite asignar cualquier tipo de dato
let datoDinamico: any = "Puede ser cualquier cosa";
console.log("Dato inicial:", datoDinamico);
datoDinamico = 42;
console.log("Dato cambiado:", datoDinamico);

// null y undefined: Representan ausencia de valor
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;
console.log("Valor nulo:", valorNulo, "| Valor indefinido:", valorIndefinido);

// tuple: Array con un número fijo de elementos y tipos específicos
let coordenadas: [number, number] = [10, 20];
console.log("Coordenadas:", coordenadas);

// enum: Lista de valores constantes con nombres descriptivos
enum Color {
  Rojo = "Red",
  Verde = "Green",
  Azul = "Blue"
}
let colorFavorito: Color = Color.Verde;
console.log("Color favorito:", colorFavorito);

// union: Define una variable que puede tener múltiples tipos
let identificador: string | number;
identificador = "ABC123";
console.log("Identificador como string:", identificador);
identificador = 987;
console.log("Identificador como número:", identificador);
