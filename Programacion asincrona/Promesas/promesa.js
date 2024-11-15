//Se manejan con los métodos .then() (para manejar la resolución) y .catch() (para manejar el rechazo).
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos obtenidos");
      }, 2000); //Tiempo de espera 2 segundos
    });
  }
  
  obtenerDatos()
    .then((resultado) => console.log(resultado))  // Espera 2 segundos e imprime "Datos obtenidos"
    .catch((error) => console.log(error));