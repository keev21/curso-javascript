// Clase base Figura
class Figura {
    calcularArea() {
      console.log("Método calcularArea() no implementado");
    }
  }
  
  // Clase Cuadrado que extiende de Figura
  class Cuadrado extends Figura {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado * this.lado;
    }
  }
  
  // Clase Circulo que extiende de Figura
  class Circulo extends Figura {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  // Crear instancias de las figuras
  const cuadrado = new Cuadrado(4);
  const circulo = new Circulo(3);
  
  // Uso polimórfico de calcularArea()
  console.log("Área del cuadrado:", cuadrado.calcularArea());  // Imprime: Área del cuadrado: 16
  console.log("Área del círculo:", circulo.calcularArea());   // Imprime: Área del círculo: 28.2743...
  