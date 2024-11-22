class Vehiculo {
    // Propiedades privadas (no accesibles directamente desde fuera)
    private marca: string;
    private modelo: string;
    private anio: number;
  
    // Constructor para inicializar las propiedades
    constructor(marca: string, modelo: string, anio: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
  
    // Método público para obtener información del vehículo
    public obtenerDetalles(): string {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }
  
    // Setter público para actualizar el año
    public setAnio(nuevoAnio: number): void {
      if (nuevoAnio > 1885) {
        // Validación para evitar años inválidos
        this.anio = nuevoAnio;
      } else {
        console.error("El año debe ser mayor a 1885.");
      }
    }
  }
  
  // Crear una instancia de la clase Vehiculo
  const miAuto = new Vehiculo("Toyota", "Corolla", 2020);
  
  // Obtener detalles iniciales
  console.log(miAuto.obtenerDetalles()); // Marca: Toyota, Modelo: Corolla, Año: 2020
  
  // Actualizar el año usando el setter
  miAuto.setAnio(2023);
  
  // Obtener los detalles actualizados
  console.log(miAuto.obtenerDetalles()); // Marca: Toyota, Modelo: Corolla, Año: 2023
  