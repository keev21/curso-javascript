// Clase padre Media
class Media {
    #titulo;
    #autor;
    #anio;
  
    constructor(titulo, autor, anio) {
      this.#titulo = titulo;
      this.#autor = autor;
      this.#anio = anio;
    }
  
    getTitulo() {
      return this.#titulo;
    }
  
    getAutor() {
      return this.#autor;
    }
  
    getAnio() {
      return this.#anio;
    }
  
    descripcion() {
      return `${this.#titulo} por ${this.#autor} (${this.#anio})`;
    }
  }
  
  export default Media;