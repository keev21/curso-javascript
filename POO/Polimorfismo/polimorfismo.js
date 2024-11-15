// Clase padre
class Animal {
    hacerSonido() {
      console.log("Este animal hace un sonido.");
    }
  }
  
  // Clase hija Perro que sobrescribe hacerSonido
  class Perro extends Animal {
    hacerSonido() {
      console.log("El perro ladra");
    }
  }
  
  // Clase hija Gato que sobrescribe hacerSonido
  class Gato extends Animal {
    hacerSonido() {
      console.log("El gato maúlla");
    }
  }
  
  // Instancias de cada clase
  const animal = new Animal();
  const perro = new Perro();
  const gato = new Gato();
  
  animal.hacerSonido(); // Imprime: Este animal hace un sonido.
  perro.hacerSonido();  // Imprime: El perro ladra
  gato.hacerSonido();   // Imprime: El gato maúlla