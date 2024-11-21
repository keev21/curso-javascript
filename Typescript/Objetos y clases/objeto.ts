// Definir un objeto
let persona = {
    nombre: "Boris",
    edad: 23,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
  
  // Acceder a las propiedades y métodos del objeto
  console.log(persona.nombre); // Boris
  console.log(persona.edad); // 23
  persona.saludar(); // Hola, mi nombre es Boris y tengo 23 años.