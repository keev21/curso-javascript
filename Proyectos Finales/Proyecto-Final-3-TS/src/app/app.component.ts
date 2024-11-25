import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Final-3-TS';
   // Array para almacenar las respuestas (1 a 3)
   respuestas: number[] = [];

   // Resultado de la satisfacción
   resultado: string = '';
 
   // Método para calcular la satisfacción promedio
   calcularSatisfaccion() {
     if (this.respuestas.length < 3) {
       this.resultado = 'Por favor, responde todas las preguntas.';
       return;
     }
 
     const total = this.respuestas.reduce((sum, value) => sum + value, 0);
     const promedio = total / this.respuestas.length;
 
     if (promedio >= 2.5) {
       this.resultado = '¡Gracias! Tu satisfacción es alta.';
     } else if (promedio >= 1.5) {
       this.resultado = 'Tu satisfacción es moderada.';
     } else {
       this.resultado = 'Lo sentimos, tu satisfacción es baja.';
     }
   }
}
