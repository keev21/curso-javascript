// Definir una matriz bidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Acceder a un elemento específico (fila 1, columna 2)
  console.log(matriz[0][1]); // 2
  
  // Cambiar un valor en la matriz (fila 2, columna 3)
  matriz[1][2] = 10;
  console.log(matriz[1][2]); // 10
  
  // Añadir una nueva fila
  matriz.push([10, 11, 12]);
  console.log(matriz);
  
  // Eliminar la última fila
  matriz.pop();
  console.log(matriz);