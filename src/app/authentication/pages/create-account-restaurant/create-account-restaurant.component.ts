import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {SignUpRequest} from "../../../iam/model/sign-up.request";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-crate-account-restaurant',
  templateUrl: './create-account-restaurant.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './create-account-restaurant.component.css'
})

export class CreateAccountRestaurantComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor( private router: Router, private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let firstname = this.form.value.firstname;
    let lastname = this.form.value.lastname;
    let email = this.form.value.email;
    let password = this.form.value.password;
    let street = this.form.value.street;
    let number = this.form.value.number;
    let postalCode = this.form.value.postalCode;
    let city = this.form.value.city;
    let country = this.form.value.country;


    const signUpRequest = new SignUpRequest(firstname, lastname, email, password, street, number, postalCode, city, country);
    this.authenticationService.signUpRestaurant(signUpRequest);
    this.submitted = true;
  }

}
