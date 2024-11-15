//EJERCICIO 1

let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    anio: 1967
  };
  
  // Manipulación del objeto
  libro.editorial = "Sudamericana";   // Agrega una nueva propiedad
  libro.anio = 1970;                  // Modifica la propiedad 'anio'
  
  // Imprimir el objeto
  console.log(libro);
  

  //EJERCICIO 2
  let persona = {
    nombre: "Luis",
    edad: 25,
  
    // Método para saludar
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
    },
  
    // Método para aumentar la edad en 1
    cumplirAnios: function() {
      this.edad += 1;
      console.log(`Ahora tengo ${this.edad} años.`);
    }
  };
  
  // Llamar a los métodos
  persona.saludar();      // Imprime: ¡Hola! Mi nombre es Luis.
  persona.cumplirAnios(); // Imprime: Ahora tengo 26 años.
  
  // Imprimir el objeto final
  console.log(persona);    // Muestra el objeto con la edad actualizada