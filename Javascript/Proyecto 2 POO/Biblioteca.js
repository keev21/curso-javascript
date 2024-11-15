class Biblioteca {
    constructor() {
      this.coleccion = [];
    }
  
    agregarMedia(media) {
      this.coleccion.push(media);
    }
  
    listarMedios() {
      this.coleccion.forEach(media => console.log(media.descripcion()));
    }
  
    buscarPorTitulo(titulo) {
      const encontrado = this.coleccion.find(media => media.getTitulo() === titulo);
      if (encontrado) {
        console.log("Encontrado:", encontrado.descripcion());
      } else {
        console.log("Media no encontrada.");
      }
    }
  }
  
  export default Biblioteca;
  