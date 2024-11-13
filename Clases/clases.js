//Definir Clases
class Persona {
    // Constructor para inicializar propiedades
    constructor(nombre, edad) {
      this.nombre = nombre; // Propiedad de la clase
      this.edad = edad;     // Propiedad de la clase
    }
  
    // Método de la clase
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }

//Crear Instancias de una Clase 
let persona1 = new Persona("Juan", 30);  // Crear una instancia de la clase Persona
let persona2 = new Persona("Ana", 25);   // Otra instancia de la clase Persona

persona1.saludar();  // Imprime: "Hola, mi nombre es Juan y tengo 30 años."
persona2.saludar();  // Imprime: "Hola, mi nombre es Ana y tengo 25 años."


//Uso de Propiedades y Métodos dentro de una Clase
class Coche {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarInfo() {
      console.log(`Este coche es un ${this.marca} ${this.modelo}.`);
    }
  }
  
  let miCoche = new Coche("Toyota", "Corolla");
  miCoche.mostrarInfo();  // Imprime: "Este coche es un Toyota Corolla."