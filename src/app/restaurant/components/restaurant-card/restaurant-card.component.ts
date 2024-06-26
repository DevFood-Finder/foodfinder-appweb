import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../Restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurantCart: any;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToDetail() {
    this.router.navigate(['/detail']);
  }
}
