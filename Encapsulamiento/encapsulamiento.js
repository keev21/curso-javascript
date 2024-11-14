class Coche {
    // Constructor con propiedades privadas
    constructor(marca, modelo) {
      this.#marca = marca;  // propiedad privada
      this.#modelo = modelo;  // propiedad privada
    }
  
    // Métodos públicos
    obtenerInfo() {
      return `Coche: ${this.#marca} ${this.#modelo}`;
    }
  
    // Método privado
    #encenderMotor() {
      console.log("El motor está encendido");
    }
  
    // Método público para controlar el acceso a un método privado
    arrancar() {
      this.#encenderMotor();
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla");
  console.log(miCoche.obtenerInfo());  // Coche: Toyota Corolla
  miCoche.arrancar();  // El motor está encendido
  
  // Intentar acceder a una propiedad o método privado desde fuera de la clase
//console.log(miCoche.#marca);  // Error, #marca es privado
//miCoche.#encenderMotor();  // Error, #encenderMotor es privado