// Paso 1: Crear la matriz bidimensional 2x2
let matriz = [
    [1, 2],
    [3, 4]
  ];
  
  // Paso 2: Acceder al valor de la primera fila y segunda columna
  console.log("Valor en la primera fila, segunda columna:", matriz[0][1]); // 2
  
  // Paso 3: Cambiar el valor de la segunda fila y primera columna a 99
  matriz[1][0] = 99;
  console.log("Nuevo valor en la segunda fila, primera columna:", matriz[1][0]); // 99
  
  // Paso 4: Añadir una nueva fila al final de la matriz
  matriz.push([5, 6]);
  console.log("Matriz después de añadir una nueva fila:", matriz);
  
  // Paso 5: Eliminar la última fila de la matriz
  matriz.pop();
  console.log("Matriz después de eliminar la última fila:", matriz);
  
  // Paso 6: Mostrar el estado final de la matriz
  console.log("Estado final de la matriz:", matriz);