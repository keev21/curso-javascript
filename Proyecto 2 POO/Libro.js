import Media from './Media.js';
//clase hija
class Libro extends Media {
  constructor(titulo, autor, anio, genero) {
    super(titulo, autor, anio);
    this.genero = genero;
  }

  descripcion() {
    return `${super.descripcion()} - Género: ${this.genero}`;
  }
}

export default Libro;
