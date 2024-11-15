// Selecciona los elementos por sus IDs
const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

// Añade un EVENTO al botón para que realice cambios al ser clickeado
boton.addEventListener("click", function() {
  // Cambia el texto del encabezado
  titulo.textContent = "¡Texto cambiado!";
  
  // Cambia el color del encabezado
  titulo.style.color = "blue";
});