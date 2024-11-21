// string: Nombre del estudiante
let estudianteNombre: string = "Carlos García";

// number: Edad del estudiante
let edadEstudiante: number = 21;

// boolean: Si ha aprobado un examen
let aprobadoExamen: boolean = true;

// enum: Días de la semana
enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miércoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sábado = "Sábado",
  Domingo = "Domingo"
}

// Asignando un día de la semana
let diaPreferido: DiaSemana = DiaSemana.Viernes;

// tuple: Año de inscripción y número de materias
let datosEstudiante: [number, number] = [2021, 5]; // [Año, Materias]

console.log("Nombre del estudiante:", estudianteNombre);
console.log("Edad:", edadEstudiante, "años");
console.log("¿Aprobó el examen?", aprobadoExamen ? "Sí" : "No");
console.log("Día preferido de la semana:", diaPreferido);
console.log("Año de inscripción:", datosEstudiante[0], "| Materias cursadas:", datosEstudiante[1]);
