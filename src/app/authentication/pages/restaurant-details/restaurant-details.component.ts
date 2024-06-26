import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {UpdateRestaurantRequest} from "../../../iam/model/update-restaurant.request";

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted = false;

  constructor( private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {

    this.form = this.builder.group({
      restaurantName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }



  onSubmit() {

    let id = this.authenticationService.lastRegisteredUserId;
    this.authenticationService.GetRestaurantById(id)
      .subscribe({
        next: (response) => {
          if (this.form.invalid) return;
          let restaurantName = this.form.value.restaurantName;
          let phone = this.form.value.phone;


          const updateRestaurantRequest = new UpdateRestaurantRequest(restaurantName,phone,response.street,response.number,response.postalCode,response.city,response.country);
          this.authenticationService.UpdateRestaurant(updateRestaurantRequest);
          this.submitted = true;

          console.log(response)
        },
        error: (error) => {
          console.error(`Error`);
        }
      })

  }


}
