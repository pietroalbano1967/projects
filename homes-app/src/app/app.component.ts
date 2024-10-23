import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'; // Importa HomeComponent

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home> <!-- Utilizzo del componente Home -->
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HomeComponent] // Aggiungi HomeComponent alle importazioni
})
export class AppComponent {
  title = 'homes';
}
