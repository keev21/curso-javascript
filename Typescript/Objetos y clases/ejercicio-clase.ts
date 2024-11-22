// Definir la clase Libro
class Libro {
    titulo: string;
    autor: string;
    anio: number;
  
    // Constructor para inicializar las propiedades
    constructor(titulo: string, autor: string, anio: number) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
    }
  
    // Método para mostrar información del libro
    mostrarInfo(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Año de publicación: ${this.anio}`);
    }
  }
  
  // Crear una instancia de la clase
  const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
  
  // Mostrar la información del libro
  libro1.mostrarInfo();
  