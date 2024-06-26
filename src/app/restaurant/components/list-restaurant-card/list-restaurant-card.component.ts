import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../Restaurant';

@Component({
  selector: 'app-list-restaurant-card',
  templateUrl: './list-restaurant-card.component.html',
  styleUrl: './list-restaurant-card.component.scss',
})
export class ListRestaurantCardComponent implements OnInit {
  // listRestaurants: Restaurant[] = [
  //   this.restaurant,
  //   this.restauran2,
  //   this.restaurant3,
  //   this.restauran4,
  //   this.restauran5,
  //   this.restauran6,
  // ];
  @Input() listRestaurants: any;
  searchInput: any;
  ngOnInit(): void {}

  onSearch(): void {
    console.log('probando');
  }
}
