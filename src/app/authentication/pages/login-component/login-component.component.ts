import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  standalone: true,
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}  // Inyecta Router

  onSubmitLogin(): void {
    console.log("Login user", {
      email: this.email,
      password: this.password
    });
  }

  onCreateAccount(): void {
    this.router.navigate(['/create']);  // Navega a /create
  }

  onForgotPassword(): void {
    this.router.navigate(['/restore']);  // Navega a /create
  }
}
