import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css'
})
export class RestorePasswordComponent {

  constructor(private router: Router) {}  // Inyecta Router

  onNewPassword(): void {
    this.router.navigate(['/new']);
  }
}
