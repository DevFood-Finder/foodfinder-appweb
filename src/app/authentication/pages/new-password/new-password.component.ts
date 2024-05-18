import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

  constructor(private router: Router) {}  // Inyecta Router

  onReturntoLogin(): void {
    this.router.navigate(['/login']);
  }
}
