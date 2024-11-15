function obtenerDatosUsuario(usuario) {
    return new Promise((resolve, reject) => {
      let tiempoDeEspera = usuario === "Juan" ? 2000 : 1000;
  
      setTimeout(() => {
        resolve(`Datos de ${usuario} obtenidos con éxito.`);
      }, tiempoDeEspera);
    });
  }
  
  Promise.all([
    obtenerDatosUsuario("Juan"),
    obtenerDatosUsuario("Ana")
  ])
  .then(respuestas => {
    console.log("Todos los datos se han obtenido:");
    respuestas.forEach(respuesta => console.log(respuesta));
  })
  .catch(error => {
    console.log("Error al obtener los datos:", error);
  });