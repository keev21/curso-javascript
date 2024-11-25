import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], // Asegúrate de importar FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Cambiar de styleUrl a styleUrls
})
export class AppComponent {
  title = 'Ejemplo1';
  
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = '';

  // Métodos para realizar las operaciones
  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 === 0) {
      this.resultado = 'Error: División por cero';
    } else {
      this.resultado = this.numero1 / this.numero2;
    }
  }
}