//Ejercicio 1
console.log("Ejercicio 1");
let num1 = 8;
let num2 = 3;

console.log("Multiplicación:", num1 * num2); // 24
console.log("Módulo:", num1 % num2);         // 2

//Ejercicio 2
console.log("Ejercicio 2");
let edadJuan = 25;
let edadMaria = 20;

console.log("¿Juan es mayor o igual que María?", edadJuan >= edadMaria); // true

//Ejercicio 3
console.log("Ejercicio 3");

let x = 10;
x += 5; // x ahora es 15
x *= 3; // x ahora es 45

console.log("Resultado final de x:", x); // 45

//Ejercicio 4
console.log("Ejercicio 4");
let esAdulto = true;
let tieneID = false;

if (esAdulto && tieneID) {
  console.log("Puede entrar al evento.");
} else {
  console.log("No puede entrar al evento.");
}