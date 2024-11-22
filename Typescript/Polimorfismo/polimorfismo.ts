// Clase base Empleado, representa un empleado genérico
class Empleado {
    nombre: string; 
    salarioBase: number; 
  
    constructor(nombre: string, salarioBase: number) {
      this.nombre = nombre; 
      this.salarioBase = salarioBase; 
    }
  
    // Método que calcula el salario (puede ser sobrescrito por las clases hijas)
    calcularSalario(): string {
      return `${this.nombre} tiene un salario base de $${this.salarioBase}`;
    }
  }
  
  // Clase hija Gerente que extiende de Empleado
  class Gerente extends Empleado {
    bono: number; 
  
    constructor(nombre: string, salarioBase: number, bono: number) {
      super(nombre, salarioBase); // Llamamos al constructor de la clase base
      this.bono = bono; 
    }
  
    // Sobreescribimos el método calcularSalario para incluir el bono
    calcularSalario(): string {
      const salarioTotal = this.salarioBase + this.bono; 
      return `${this.nombre} (Gerente) tiene un salario total de $${salarioTotal}`;
    }
  }
  
  // Clase hija Desarrollador que extiende de Empleado
  class Desarrollador extends Empleado {
    horasExtras: number; 
    pagoPorHoraExtra: number; 
  
    constructor(nombre: string, salarioBase: number, horasExtras: number, pagoPorHoraExtra: number) {
      super(nombre, salarioBase); // Llamamos al constructor de la clase base
      this.horasExtras = horasExtras; // Inicializamos las horas extra
      this.pagoPorHoraExtra = pagoPorHoraExtra; // Inicializamos el pago por hora extra
    }
  
    // Sobreescribimos el método calcularSalario para incluir el pago de horas extra
    calcularSalario(): string {
      const extra = this.horasExtras * this.pagoPorHoraExtra; 
      const salarioTotal = this.salarioBase + extra; 
      return `${this.nombre} (Desarrollador) tiene un salario total de $${salarioTotal}`;
    }
  }
  
  // Creamos un arreglo de empleados, que incluye objetos de diferentes clases
  const empleados: Empleado[] = [
    new Empleado("Ana", 1500), 
    new Gerente("Carlos", 2000, 500), 
    new Desarrollador("Luis", 1800, 10, 50), 
  ];
  
  // Recorremos el arreglo e imprimimos los salarios
  empleados.forEach((empleado) => {
    // Polimorfismo: se ejecuta el método correspondiente según la clase del objeto
    console.log(empleado.calcularSalario());
  });
  