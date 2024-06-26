import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {SignInRequest} from "../../../iam/model/sign-in.request";
import {BaseFormComponent} from "../../../shared/components/base-form.component";  // Importa Router

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor(private router: Router, private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let email = this.form.value.email;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(email, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

  onCreateClient(): void {
    this.router.navigate(['/register-client']);  // Navega a /create
  }

  onCreateRestaurant(): void {
    this.router.navigate(['/register-restaurant']);  // Navega a /create
  }

  onForgotPassword(): void {
    this.router.navigate(['/restore']);  // Navega a /create
  }
}
