//Operadores matemáticos
let a = 10;
let b = 3;

console.log("Suma:", a + b);               // 13
console.log("Resta:", a - b);              // 7
console.log("Multiplicación:", a * b);     // 30
console.log("División:", a / b);           // 3.333...
console.log("Módulo (residuo):", a % b);   // 1
console.log("Exponenciación:", a ** b);    // 1000

//Operadores de comparación
let num1 = 10;
let num2 = 5;

console.log("num1 > num2:", num1 > num2);          // true (mayor que)
console.log("num1 < num2:", num1 < num2);          // false (menor que)

console.log("num1 == num2:", num1 == num2);        // false (igualdad)
console.log("num1 != num2:", num1 != num2);        // true (diferencia)

console.log("num1 >= num2:", num1 >= num2);        // true (mayor o igual que)
console.log("num1 <= num2:", num1 <= num2);        // false (menor o igual que)

console.log("num1 === 10:", num1 === 10);          // true (estrictamente igual)
console.log("num1 !== '10':", num1 !== "10");      // true (estrictamente diferente)

//Operadores lógicos
let esEstudiante = true;
let tieneBeca = false;

console.log("AND (&&):", esEstudiante && tieneBeca); // false
console.log("OR (||):", esEstudiante || tieneBeca);  // true
console.log("NOT (!):", !esEstudiante);              // false

//Operadores de Concatenación
let saludo = "Hola";
let nombre = "Carlos";
console.log(saludo + " " + nombre); // "Hola Carlos"
