// Selecciona los elementos por sus IDs
const saludo = document.getElementById("saludo");
const boton = document.getElementById("cambiarTexto");

// Añade un evento al botón para que realice cambios al hacer clic
boton.addEventListener("click", function() {
  // Cambia el texto del saludo
  saludo.textContent = "¡Hola, JavaScript!";
  
  // Cambia el color del saludo a verde
  saludo.style.color = "green";
});