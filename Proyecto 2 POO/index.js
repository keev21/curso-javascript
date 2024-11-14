import Libro from './Libro.js';
import Revista from './Revista.js';
import Biblioteca from './Biblioteca.js';

const miBiblioteca = new Biblioteca();

const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967, "Realismo Mágico");
const revista1 = new Revista("National Geographic", "National Geographic Society", 2021, 3);

miBiblioteca.agregarMedia(libro1);
miBiblioteca.agregarMedia(revista1);

console.log("Listado de Medios en la Biblioteca:");
miBiblioteca.listarMedios();

console.log("\nBúsqueda de un Título:");
miBiblioteca.buscarPorTitulo("Cien Años de Soledad");
