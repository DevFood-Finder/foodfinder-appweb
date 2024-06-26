import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UpdateClientRequest} from "../../../iam/model/update-client.request";


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './client-details.component.css'
})

export class ClientDetailsComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor( private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      nickName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let nickName = this.form.value.nickName;


    const updateClientRequest = new UpdateClientRequest(nickName);
    this.authenticationService.UpdateClient(updateClientRequest);
    this.submitted = true;
  }

}
