//if
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

//for
for (let i = 0; i < 5; i++) {
    console.log("Repetición número:", i);
  }

//while
let contador = 0;
while (contador < 3) {
  console.log("Contador:", contador);
  contador++;
}

//switch
let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes.");
    break;
  case "martes":
    console.log("Hoy es martes.");
    break;
  case "miércoles":
    console.log("Hoy es miércoles.");
    break;
  default:
    console.log("No es lunes, martes ni miércoles.");
}