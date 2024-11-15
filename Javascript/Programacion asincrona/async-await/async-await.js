// Función que simula una solicitud asíncrona
function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Datos obtenidos con éxito!");
      }, 2000);  // Simula un retraso de 2 segundos
    });
  }
  
  // Función asíncrona que usa async/await
  async function mostrarDatos() {
    console.log("Cargando datos...");
  
    // Espera a que la promesa se resuelva antes de continuar
    const datos = await obtenerDatos();
    
    console.log(datos);  // Esto se ejecuta después de 2 segundos, cuando la promesa se resuelve
  }
  
  mostrarDatos();

//MANEJO DE ERRORES
  async function obtenerDatos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Hubo un error al obtener los datos.");
      }, 2000);
    });
  }
  
  async function mostrarDatos() {
    try {
      const datos = await obtenerDatos();
      console.log(datos);
    } catch (error) {
      console.log("Error:", error);  // Manejo de error
    }
  }
  
  mostrarDatos();