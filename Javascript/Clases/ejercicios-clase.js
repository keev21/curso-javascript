class Libro {
    constructor(titulo, autor, anio) {
      this.titulo = titulo;
      this.autor = autor;
      this.anio = anio;
    }
  
    mostrarInfo() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}`);
    }
  }
  
  // Crear dos instancias de la clase Libro
  let libro1 = new Libro("1984", "George Orwell", 1949);
  let libro2 = new Libro("To Kill a Mockingbird", "Harper Lee", 1960);
  
  // Mostrar la información de ambos libros
  libro1.mostrarInfo();  // Título: 1984, Autor: George Orwell, Año: 1949
  libro2.mostrarInfo();  // Título: To Kill a Mockingbird, Autor: Harper Lee, Año: 1960