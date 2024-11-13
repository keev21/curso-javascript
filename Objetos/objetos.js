let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Quito"
  };

console.log(persona.nombre);      // Imprime: Carlos
persona.edad = 31;                // Modifica la edad
persona.profesion = "Ingeniero";  // Agrega una nueva propiedad

// método en un objeto
//método es una función que forma parte de un objeto.

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function() {
      console.log("El coche está arrancando.");
    }
  };
  
  coche.arrancar(); // Imprime: El coche está arrancando.