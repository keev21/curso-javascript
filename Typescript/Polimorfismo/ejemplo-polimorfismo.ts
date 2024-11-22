// Clase base llamada Transporte
class Transporte {
    // Método genérico que será sobrescrito por las clases hijas
    moverse(): string {
      return "Este transporte está en movimiento.";
    }
  }
  
  // Clase hija Avion que hereda de Transporte
  class Avion extends Transporte {
    // Sobrescribe el método moverse
    moverse(): string {
      return "El avión está volando.";
    }
  }
  
  // Clase hija Barco que hereda de Transporte
  class Barco extends Transporte {
    // Sobrescribe el método moverse
    moverse(): string {
      return "El barco está navegando.";
    }
  }
  
  // Clase hija Coche que hereda de Transporte
  class Coche extends Transporte {
    // Sobrescribe el método moverse
    moverse(): string {
      return "El coche está rodando por la carretera.";
    }
  }
  
  // Crear instancias de las clases hijas
  const avion = new Avion();
  const barco = new Barco();
  const coche = new Coche();
  
  // Arreglo que contiene diferentes tipos de transporte
  const transportes: Transporte[] = [avion, barco, coche];
  
  // Iterar sobre el arreglo y llamar al método moverse() para cada instancia
  transportes.forEach((transporte) => {
    console.log(transporte.moverse()); // Muestra el mensaje correspondiente de cada transporte
  });
  