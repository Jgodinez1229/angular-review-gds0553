import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  redirectToLogin(): void {
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión cuando se hace clic en el botón
  }
}
