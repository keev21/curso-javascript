// Clase Padre
class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    // Método para mostrar información del empleado
    mostrarInfo() {
      console.log(`Empleado: ${this.nombre}, Salario: $${this.salario}`);
    }
  
    // Método para calcular el bono anual (en la clase padre)
    calcularBono() {
      return this.salario * 0.1; // Bono del 10% del salario
    }
  }
  
  // Clase Hija que hereda de Empleado
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario); // Llama al constructor de la clase padre
      
      this.departamento = departamento;
    }
  
    // Sobreescribe el método mostrarInfo para agregar el departamento
    mostrarInfo() {
      super.mostrarInfo(); // Llama al método de la clase padre
      console.log(`Departamento: ${this.departamento}`);
    }
  
    // Sobreescribe el método calcularBono para un bono mayor
    calcularBono() {
      return this.salario * 0.2; // Bono del 20% para gerentes
    }
  }
  
  // Crear instancias
  const empleado = new Empleado("Juan", 50000);
  const gerente = new Gerente("Ana", 70000, "Ventas");
  
  empleado.mostrarInfo(); // Imprime: Empleado: Juan, Salario: $50000
  gerente.mostrarInfo();  // Imprime: Empleado: Ana, Salario: $70000 y Departamento: Ventas
  
  console.log("Bono de Juan:", empleado.calcularBono()); // Imprime: Bono de Juan: 5000
  console.log("Bono de Ana:", gerente.calcularBono());   // Imprime: Bono de Ana: 14000