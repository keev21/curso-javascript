//Ejercicio 1
console.log("Ejercicio 1")
let edad = 25;

if (edad < 18) {
  console.log("Eres menor de edad.");
} else if (edad <= 35) {
  console.log("Eres joven.");
} else {
  console.log("Eres mayor.");
}

//Ejercicio 2
console.log("Ejercicio 2")
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//Ejercicio 3
console.log("Ejercicio 3")
let contador = 5;

while (contador > 0) {
  console.log(contador);
  contador--;
}
//Ejercicio 4
console.log("Ejercicio 4")
let diaNumero = 3;

switch (diaNumero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número de día inválido");
}
