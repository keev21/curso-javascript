let animales = ["perro", "gato", "pájaro"];
let ciudades = ["Quito", "Guayaquil", "Cuenca"];

// Imprimir el segundo elemento de `animales`
console.log(animales[1]); // Imprime: gato

// Agregar un nuevo animal al final del array `animales`
animales.push("elefante");
// animales ahora es ["perro", "gato", "pájaro", "elefante"]

// Eliminar el último elemento del array `ciudades`
ciudades.pop();
// ciudades ahora es ["Quito", "Guayaquil"]

// Imprimir los arrays finales
console.log("Animales:", animales);  // ["perro", "gato", "pájaro", "elefante"]
console.log("Ciudades:", ciudades);  // ["Quito", "Guayaquil"]