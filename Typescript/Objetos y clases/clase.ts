// Definir una clase
class Persona {
    nombre: string;
    edad: number;
  
    // Constructor para inicializar las propiedades
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para mostrar la información
    saludar(): void {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Crear una instancia (objeto) de la clase
  let persona1 = new Persona("Carlos", 30);
  
  // Acceder a las propiedades y métodos de la instancia
  console.log(persona1.nombre); // Carlos
  console.log(persona1.edad); // 30
  persona1.saludar(); // Hola, mi nombre es Carlos y tengo 30 años.