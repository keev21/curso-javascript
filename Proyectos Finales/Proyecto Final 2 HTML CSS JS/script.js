function convertir() {
    // Obtener el valor de kilómetros desde el input
    const km = document.getElementById('km').value;

    // Verificar si el valor es nulo, vacío o menor que cero
    if (km === "" || km === null || parseFloat(km) < 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Convertir el valor a un número válido
    const kmNumber = parseFloat(km);

    // Realizar las conversiones
    const mm = kmNumber * 1000000; // Kilómetros a milímetros
    const m = kmNumber * 1000; // Kilómetros a metros
    const cm = kmNumber * 100000; // Kilómetros a centímetros
    const dm = kmNumber * 10000; // Kilómetros a decímetros

    // Mostrar los resultados
    const resultados = `
        <p>${kmNumber} km es igual a:</p>
        <p>${mm} mm</p>
        <p>${m} m</p>
        <p>${cm} cm</p>
        <p>${dm} dm</p>
    `;

    // Insertar los resultados en el contenedor
    document.getElementById('resultados').innerHTML = resultados;
}
