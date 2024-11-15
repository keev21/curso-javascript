import Media from './Media.js';

class Revista extends Media {
  constructor(titulo, autor, anio, numeroEdicion) {
    super(titulo, autor, anio);
    this.numeroEdicion = numeroEdicion;
  }

  descripcion() {
    return `${super.descripcion()} - Edición No: ${this.numeroEdicion}`;
  }
}

export default Revista;
