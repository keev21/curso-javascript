let animales = ["perro", "gato", "pájaro"];
let ciudades = ["Quito", "Guayaquil", "Cuenca"];

// Acceder al segundo elemento del array `animales`
console.log(animales[1]); // Imprime: gato

// Agregar un nuevo animal al inicio del array `animales`
animales.unshift("elefante");
// animales ahora es ["elefante", "perro", "gato", "pájaro"]

// Eliminar el primer elemento del array `ciudades`
ciudades.shift();
// ciudades ahora es ["Guayaquil", "Cuenca"]

// Imprimir los arrays finales
console.log("Animales:", animales);  // ["elefante", "perro", "gato", "pájaro"]
console.log("Ciudades:", ciudades);  // ["Guayaquil", "Cuenca"]