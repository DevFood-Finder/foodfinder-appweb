import {Component, OnInit} from '@angular/core';
import {RestaurantModel} from "../../../iam/model/restaurant.model";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../../iam/services/authentication.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  restaurant: RestaurantModel = {} as RestaurantModel;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    const restaurantName = this.route.snapshot.paramMap.get('name');
    const restaurantId = +this.route.snapshot.paramMap.get('id')!;
    this.authenticationService.GetRestaurantById(restaurantId).subscribe(restaurant => {
      this.restaurant = restaurant;
    });
  }
}
