// Clase Padre
class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    // Método para mostrar detalles del empleado
    detalles() {
      console.log(`Empleado: ${this.nombre}, Salario: $${this.salario}`);
    }
  }
  
  // Clase Hija que hereda de Empleado
  class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje) {
      super(nombre, salario); // Llama al constructor de la clase padre
      this.lenguaje = lenguaje;
    }
  
    // Sobreescribe el método detalles
    detalles() {
      console.log(`Desarrollador: ${this.nombre}, Salario: $${this.salario}, Lenguaje: ${this.lenguaje}`);
    }
  }
  
  // Crear instancias y llamar al método
  const empleado = new Empleado("Laura", 45000);
  const desarrollador = new Desarrollador("Miguel", 60000, "JavaScript");
  
  empleado.detalles();       // Imprime: Empleado: Laura, Salario: $45000
  desarrollador.detalles();   // Imprime: Desarrollador: Miguel, Salario: $60000, Lenguaje: JavaScript