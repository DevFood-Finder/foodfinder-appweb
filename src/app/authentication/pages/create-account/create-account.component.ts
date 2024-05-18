import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crate-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})

export class CreateAccountComponent {
  constructor(private router: Router) {}  // Inyecta Router

  onReturnLogin(): void {
    this.router.navigate(['/login']);
  }
}
