// Clase base Vehiculos
class Vehiculos {
    marca: string;
    modelo: string;
    anio: number;
  
    constructor(marca: string, modelo: string, anio: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
  
    // Método para mostrar información del vehículo
    obtenerDetalles(): string {
      return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.anio}`;
    }
  }
  
  // Clase hija Auto que hereda de Vehiculos
  class Auto extends Vehiculos {
    numeroPuertas: number;
  
    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
      super(marca, modelo, anio); // Llama al constructor de la clase base
      this.numeroPuertas = numeroPuertas;
    }
  
    // Sobrescribe el método obtenerDetalles para incluir el número de puertas
    obtenerDetalles(): string {
      return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
    }
  }
  
  // Crear una instancia de la clase Auto
  const carroPersonal = new Auto("Toyota", "Corolla", 2022, 4);
  
  // Mostrar detalles del auto
  console.log(carroPersonal.obtenerDetalles());
  