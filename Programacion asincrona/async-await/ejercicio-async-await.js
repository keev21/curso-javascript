// 1. Función que simula obtener datos de un usuario
function obtenerUsuario() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando un error aleatorio para practicar manejo de errores
        const errorSimulado = false; // Cambiar a true para simular error
  
        if (errorSimulado) { //si errorSimulado es igual a true
          reject("Hubo un problema al obtener los datos del usuario.");
        } else {
          resolve({
            id: 1,
            nombre: "Juan",
            edad: 25
          });
        }
      }, 3000);  // Simula un retraso de 3 segundos
    });
  }
  
  // 2. Función asíncrona que usa await para esperar la promesa
  async function mostrarUsuario() {
    try {
      // 3. Espera a que la promesa se resuelva
      const usuario = await obtenerUsuario();
      
      // 4. Muestra el mensaje con los datos del usuario
      console.log(`El usuario es ${usuario.nombre}, tiene ${usuario.edad} años.`);
    } catch (error) {
      // 5. Manejo de errores
      console.log("Error:", error);
    }
  }
  
  // 6. Llamada a la función asíncrona
  mostrarUsuario();